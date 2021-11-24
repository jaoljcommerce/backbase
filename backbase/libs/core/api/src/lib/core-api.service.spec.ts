import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { first } from 'rxjs/operators';

import { Transaction } from '@backbase/core/model';

import { CoreApiService } from './core-api.service';

describe('ApiService', () => {
  let coreApiService: CoreApiService;
  let httpClientMock: {
    get: jest.Mock<Observable<Transaction[]>>;
  };

  beforeEach(() => {
    httpClientMock = {
      get: jest.fn(),
    };

    coreApiService = new CoreApiService(
      httpClientMock as unknown as HttpClient
    );
  });

  describe('getTransactions()', () => {
    it('should return user groups from api call', (done) => {
      const transactions$: Observable<Transaction[]> =
        coreApiService.getTransactions();
      const returnValue = [
        {
          categoryCode: 'aaa',
          dates: {
            valueDate: 111,
          },
          transaction: {
            amountCurrency: {
              amount: 222,
              currencyCode: 'bbb',
            },
            type: 'ccc',
            creditDebitIndicator: 'ddd',
          },
          merchant: {
            name: 'eee',
            accountNumber: 'fff',
          },
        },
      ];

      httpClientMock.get.mockReturnValue(of(returnValue));

      transactions$.pipe(first()).subscribe((transactions) => {
        expect(transactions).toBe(returnValue);

        done();
      });

      expect(httpClientMock.get).toHaveBeenCalledWith(
        './assets/data/transactions.json'
      );
    });

    it('should throw new error when api call faild', (done) => {
      const transactions$: Observable<Transaction[]> =
        coreApiService.getTransactions();
      const returError = new HttpErrorResponse({
        error: 'file not exist',
        status: 404,
      });

      httpClientMock.get.mockReturnValue(throwError(returError));

      transactions$.pipe(first()).subscribe({
        error: (error: HttpErrorResponse) => {
          expect(error).toBe(returError);

          done();
        },
      });

      expect(httpClientMock.get).toHaveBeenCalledWith(
        './assets/data/transactions.json'
      );
    });
  });
});

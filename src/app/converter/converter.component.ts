import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit {

  rates: { [key: string]: number } = {};
  fromCurrency: string = 'USD';
  toCurrency: string = 'EUR';
  amount: number = 1;
  result: number | null = null;

  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {
    this.currencyService.getRates().subscribe(data => {
      this.rates = data.data;
    });
  }

  convert(): void {
    if (this.fromCurrency && this.toCurrency && this.amount) {
      const fromRate = this.rates[this.fromCurrency];
      const toRate = this.rates[this.toCurrency];
      this.result = (this.amount / fromRate) * toRate;
    }
  }
}

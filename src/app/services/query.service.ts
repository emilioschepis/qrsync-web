import { Injectable } from '@angular/core';
import { Code } from '../model/code';

@Injectable({
  providedIn: 'root'
})
export class QueryService {

  constructor() { }

  private sanitizeInput(content) {
    // Replaces all whitespaces with a '+'
    return content.replace(/\s/g, '+');
  }

  getGoogleQuery(code: Code) {
    const query = this.sanitizeInput(code.content);
    return 'https://google.com/search?q=' + query;
  }

  getIsbnQuery(code: Code) {
    // TODO: Find a better ISBN repository
    const query = this.sanitizeInput(code.content);
    return 'https://google.com/search?q=' + query;
  }

  getProductQuery(code: Code) {
    const query = this.sanitizeInput(code.content);
    return 'https://google.com/search?q=' + query;
  }
}

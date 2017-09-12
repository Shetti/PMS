
import googleFinance from 'google-finance';

export const getCSSUrl = () => 
{
    return ['/bundle.css' ].join('');
}


var sym = 'NASDAQ:GOOG';
var newsResult = '';

export function getCompanyNews(){
  googleFinance.companyNews(sym,function (news) {
    if (news[0]) {
      newsResult = JSON.stringify(news[0], null, 2);
  } else {
    console.log('N/A');
  }
        return newsResult;
});


}
class MarketplacePage {
      elements = {
            getH1CustomWeatherProducts: () => cy.get('div #custom_weather_products h1'),
            getAllProductTitles: () => cy.get('.market-place a[href]:not(.button-round)'),
            getDocumentationBtnHistoryBulk :() => cy.get('div.button-container > a[href="https://openweathermap.org/history-bulk"]')
      }

clickDocumentationBtnHistoryBulk () {
            this.elements.getDocumentationBtnHistoryBulk().invoke('removeAttr', 'target').click()
       }
}
export default MarketplacePage

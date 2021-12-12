function getBotResponse(input) {

const hvem = ["meg", "megselv", "andre", "noen andre"]
const budsjett = ["4000", "4500", "5000", "5500", "6000", "7000", "7500", "8000", "8500", "9000", "9500", "10000", "11000", "12000", "13000"]
const budsjett1 = ["1000", "2000", "3000", "1500", "2500", "3500", "500"]
const budsjett2 = ["4000", "4500", "5000", "5500", "6000"]
const budsjett3 = ["7000", "7500", "8000", "8500", "9000"]
const budsjett4 = ["10000", "11000"]
const budsjett5 = ["12000", "13000"]
  if (input == "hei") {
    return "Her kan du få hjelpe deg med å finne en pc som passer til deg, er det det du letter etter?";
  } else if (input == "ja") {
    return "Ok supert! Her får du foreslag til flere typer maskiner som passer til deg. Er du på utsikt etter en pc til spill eller noe til kontorarbeid?"
  } else  if (input == "spill") {
    return "Er den til deg eller noen andre?";
  } else  if (hvem.includes(input)) {
    return "Så kult, men hvilke spill ut av minecraft, gta og warzone liker du best?"
  } else if (input == "minecraft") {
    return "Hva grafikk har du lyst på? lav1/middels1/høy1"
  } else if (input == "lav1") {
    return 'Da anbefaler jeg denne: <a href="https://pcpartpicker.com/list/9dw2t8">pcpartpicker.com</a>'
  } else if (input == "middels1") {
    return 'Da anbefaler jeg denne: <a href="https://pcpartpicker.com/list/VpnFBc">pcpartpicker.com</a>'
  } else if (input == "høy1") {
    return 'Da anbefaler jeg denne: <a href="https://pcpartpicker.com/list/3W73K3">pcpartpicker.com</a>'
  } else if (input == "gta") {
    return "Hva grafikk har du lyst på? lav2/middels2/høy2"
  } else if (input == "lav2") {
    return 'Da anbefaler jeg denne: <a href="https://pcpartpicker.com/list/K4QWVc">pcpartpicker.com</a>'
  } else if (input == "middels2") {
    return 'Da anbefaler jeg denne: <a href="https://pcpartpicker.com/list/N7J4K3">pcpartpicker.com</a>'
  } else if (input == "høy2") {
    return 'Da anbefaler jeg denne: <a href="https://pcpartpicker.com/list/d3QWVc">pcpartpicker.com</a>'
  } else if (input == "warzone") {
    return "Hva grafikk har du lyst på? lav3/middels3/høy3"
  } else if (input == "lav3") {
    return 'Da anbefaler jeg denne: <a href="https://pcpartpicker.com/list/WmZTXb">pcpartpicker.com</a>'
  } else if (input == "middels3") {
    return 'Da anbefaler jeg denne: <a href="https://pcpartpicker.com/list/fvtfJf">pcpartpicker.com</a>'
  } else if (input == "høy3") {
    return 'Da anbefaler jeg denne: <a href="https://pcpartpicker.com/list/XjVKy4">pcpartpicker.com</a>'
  } else if (input == "kontorarbeid") {
    return "Hva er budsjettet ditt?"
  } else if (budsjett1.includes(input)) {
    return "Det budsjettet er for lavt for en pc"
  } else if (budsjett2.includes(input)) {
    return 'Jeg anbefaler denne: <a href="https://www.komplettbedrift.no/product/1191534/pc-nettbrett/pc-baerbar/pc-er/acer-swift-1-sf114-34-14-fhd#">Komplett.no</a>'
  } else if (budsjett3.includes(input)) {
    return 'Jeg anbefaler denne: <a href="https://www.komplettbedrift.no/product/1170988/pc-nettbrett/pc-baerbar/ultraportable/acer-aspire-5-a514-54-14-fhd#">Komplett.no</a>'
  } else if (budsjett4.includes(input)) {
    return 'Jeg anbefaler denne: <a href="https://www.komplettbedrift.no/product/1185287/pc-nettbrett/pc-baerbar/ultraportable/hp-probook-450-g8-156-full-hd">Komplett.no</a>'
  } else if (budsjett5.includes(input)) {
    return 'Jeg anbefaler denne: <a href="https://www.komplettbedrift.no/product/1184200/pc-nettbrett/pc-baerbar/ultraportable/lenovo-thinkbook-15p-156-full-hd">Komplett.no</a>'
  }
}

function CordovaPrinter() {
}

CordovaPrinter.prototype.getPrinters = function(successCallback, errorCallback) {
  cordova.exec(successCallback,
            errorCallback,
            'CordovaPrinter',
            'cordovaGetPrinters');
};

CordovaPrinter.prototype.print = function(successCallback, errorCallback, serialNumber, labelData, height) {
  cordova.exec(successCallback,
             errorCallback,
             'CordovaPrinter',
             'cordovaPrint', [labelData, serialNumber, height]);
};

CordovaPrinter.install = function() {
  if (!window.plugins) {
    window.plugins = {};
  }

  window.plugins.CordovaPrinter = new CordovaPrinter();
  return window.plugins.CordovaPrinter;
};

cordova.addConstructor(CordovaPrinter.install);

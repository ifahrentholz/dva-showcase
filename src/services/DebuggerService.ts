class DebuggerService {
  debugModeActive = false;

  log(message?: any, ...args: any[]) {
    if (this.debugModeActive === false) return;
    console.log(message, ...args);
  }

  warn(message?: any, ...args: any[]) {
    if (this.debugModeActive === false) return;
    console.warn(message, ...args);
  }

  error(message?: any, ...args: any[]) {
    if (this.debugModeActive === false) return;
    console.error(message, ...args);
  }
}

export default new DebuggerService();

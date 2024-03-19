class LazyConnectService {
  componentMap = new WeakMap();
  intersectionObserver: IntersectionObserver;

  constructor() {
    this.intersectionObserver = new IntersectionObserver(entries => this.handleIntersectionChange(entries));
  }

  subscribe(target: HTMLElement, intersectionCallback: () => void) {
    this.componentMap.set(target, intersectionCallback);
    this.intersectionObserver.observe(target);
  }

  unsubscribe(target: HTMLElement) {
    this.intersectionObserver.unobserve(target);
    this.componentMap.delete(target);
  }

  handleIntersectionChange(entries: Array<IntersectionObserverEntry>) {
    // console.log("lol", entries);
    entries.forEach(intersectionEntry => {
      const target = intersectionEntry.target;

      if (!intersectionEntry.isIntersecting || !this.componentMap.has(target)) return;

      const intersectionCallback = this.componentMap.get(target);
      this.unsubscribe(target as HTMLElement);
      intersectionCallback();
    });
  }
}

export default new LazyConnectService();

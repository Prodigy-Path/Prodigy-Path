class MockIntersectionObserver {
  constructor(callback) {
    this.callback = callback;
  }

  observe() {}

  unobserve() {}

  disconnect() {}
}

global.IntersectionObserver = MockIntersectionObserver;

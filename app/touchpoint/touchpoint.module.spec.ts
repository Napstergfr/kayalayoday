import { TouchpointModule } from './touchpoint.module';

describe('TouchpointModule', () => {
  let touchpointModule: TouchpointModule;

  beforeEach(() => {
    touchpointModule = new TouchpointModule();
  });

  it('should create an instance', () => {
    expect(touchpointModule).toBeTruthy();
  });
});

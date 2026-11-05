import { CanvasLMSEntrypoint, CanvasLMSConfig } from './modules/plugins/canvas';

if (CanvasLMSConfig.isActive) {
  CanvasLMSEntrypoint();
}

import { CanvasLMSEntrypoint, CanvasLMSConfig } from './modules/plugins/canvas';
import {
  BlackboardEntrypoint,
  isBlackboard,
} from './modules/plugins/blackboard';

if (CanvasLMSConfig.isActive) {
  CanvasLMSEntrypoint();
} else if (isBlackboard) {
  BlackboardEntrypoint();
}

// Experiments stripped: no remote config fetch, no client id. Everything is "control".
import { ExperimentConfig } from '../types';

export interface ExperimentsHubInterface {
  configs: ExperimentConfig[];
  userId: string;
}

export function useExperiments(): ExperimentsHubInterface {
  return { configs: [], userId: '' };
}

export interface ExperimentInterface {
  config: ExperimentConfig;
  userId: string;
  treated: boolean;
}

export function useExperiment(_id: string): ExperimentInterface {
  return { config: {} as ExperimentConfig, userId: '', treated: false };
}

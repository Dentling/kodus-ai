import { GetAllAutomationsUseCase } from './get-all-automations.use-case';
import { RunAutomationUseCase } from './run-automation.use-case';
import { RunCodeReviewAutomationUseCase } from '../../../../ee/automation/runCodeReview.use-case';

export const UseCases = [
    GetAllAutomationsUseCase,
    RunAutomationUseCase,
    RunCodeReviewAutomationUseCase,
];

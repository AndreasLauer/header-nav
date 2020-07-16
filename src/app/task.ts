export interface Task {
    id: string;
    name: string;
    description: string;
    epic: string; // @TODO: define enum Epic
    status: string; // @TODO: define enum TaskStatus
    progressStatus: string; // @TODO: define enum TaskProgressStatus
}
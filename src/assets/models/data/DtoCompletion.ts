
enum Role {
    USR = 'user',
    ASS = 'assistant',
    SYS = 'system'
}

interface DtoCompletionUsage {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
}

interface DtoCompletionChoice {
    message: {
        role: string;
        content: string;
    }
    finish_reason: string;
    index: number;
}

interface DtoCompletion {
    created: number;
    model: string;
    usage: DtoCompletionUsage
    choices: DtoCompletionChoice[]
}

class CompletionMessage {
    role: Role
    content: string

    constructor(role: Role, content: string) {
        this.role = role
        this.content = content
    }
}

export {
    type DtoCompletion,
    type DtoCompletionUsage,
    type DtoCompletionChoice,
    CompletionMessage,
    Role
}
'use client';

import { create } from 'zustand';

export type Provider = 'Claude' | 'Codex' | 'Gemini' | 'GPT';
export type Environment = 'Development' | 'Staging' | 'Production';

type Message = { id: string; role: 'user' | 'assistant'; text: string; provider: Provider };

type AppState = {
  project: string;
  provider: Provider;
  environment: Environment;
  messages: Message[];
  setProject: (project: string) => void;
  setProvider: (provider: Provider) => void;
  setEnvironment: (environment: Environment) => void;
  sendMockMessage: (text: string) => void;
};

const mockReplies: Record<Provider, string> = {
  Claude: 'Sugestão arquitetural gerada. Próximo passo: detalhar módulos.',
  Codex: 'Snippet implementado com sucesso em modo simulado.',
  Gemini: 'Análise multimodal simulada concluída para a interface.',
  GPT: 'Resposta estratégica simulada com plano em 3 etapas.'
};

export const useAppStore = create<AppState>((set, get) => ({
  project: 'NexMind Core',
  provider: 'GPT',
  environment: 'Development',
  messages: [
    { id: '1', role: 'assistant', text: 'Olá! Estou pronto para ajudar no projeto.', provider: 'GPT' }
  ],
  setProject: (project) => set({ project }),
  setProvider: (provider) => set({ provider }),
  setEnvironment: (environment) => set({ environment }),
  sendMockMessage: (text) => {
    const { provider, messages } = get();
    const userMsg: Message = { id: crypto.randomUUID(), role: 'user', text, provider };
    const aiMsg: Message = {
      id: crypto.randomUUID(),
      role: 'assistant',
      text: `${mockReplies[provider]} (provider: ${provider})`,
      provider
    };

    // TODO: substituir por integração real com backend/API de chat.
    set({ messages: [...messages, userMsg, aiMsg] });
  }
}));

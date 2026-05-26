'use client';

import { FormEvent, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Provider, useAppStore } from '@/store/app-store';

const providers: Provider[] = ['Claude', 'Codex', 'Gemini', 'GPT'];
const envs = ['Development', 'Staging', 'Production'] as const;

export default function ChatPage() {
  const { provider, setProvider, messages, sendMockMessage, project, environment, setEnvironment } = useAppStore();
  const [text, setText] = useState('');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    sendMockMessage(text);
    setText('');
  };

  return (
    <div className='grid gap-4 lg:grid-cols-[2fr_1fr]'>
      <Card className='flex h-[80vh] flex-col'>
        <h1 className='mb-4 text-xl font-semibold'>Tela de Chat com IA</h1>
        <div className='mb-4 flex-1 space-y-3 overflow-auto rounded-lg border border-border p-3'>
          {messages.map((m) => (
            <div key={m.id} className='rounded-lg bg-accent p-3 text-sm'>
              <p className='mb-1 text-xs text-muted'>{m.role === 'assistant' ? `${m.provider} (mock)` : 'Você'}</p>
              <p>{m.text}</p>
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit} className='flex gap-2'>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder='Descreva uma tarefa...' className='flex-1 rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary' />
          <Button type='submit'>Enviar</Button>
        </form>
      </Card>

      <div className='space-y-4'>
        <Card>
          <h2 className='mb-2 font-medium'>Seletor de provedores</h2>
          <div className='grid grid-cols-2 gap-2'>
            {providers.map((p) => (
              <button key={p} className={`rounded-lg border px-3 py-2 text-sm ${provider === p ? 'border-primary bg-accent' : 'border-border'}`} onClick={() => setProvider(p)}>
                {p}
              </button>
            ))}
          </div>
          <p className='mt-2 text-xs text-muted'>// TODO: conectar lista de providers ao backend/API.</p>
        </Card>

        <Card>
          <h2 className='mb-2 font-medium'>Painel de contexto compartilhado</h2>
          <p className='text-sm text-muted'>Projeto: {project}</p>
          <p className='text-sm text-muted'>Provider ativo: {provider}</p>
          <p className='text-sm text-muted'>Estado global: clean architecture + memória vetorial (mock)</p>
          <p className='mt-2 text-xs text-muted'>// TODO: carregar contexto real do projeto pela API de memória.</p>
        </Card>

        <Card>
          <h2 className='mb-2 font-medium'>Seletor de ambiente</h2>
          <select value={environment} onChange={(e) => setEnvironment(e.target.value as typeof envs[number])} className='w-full rounded-lg border border-border bg-background px-3 py-2 text-sm'>
            {envs.map((env) => (
              <option key={env}>{env}</option>
            ))}
          </select>
          <p className='mt-2 text-xs text-muted'>// TODO: sincronizar ambiente com estado persistente no backend.</p>
        </Card>
      </div>
    </div>
  );
}

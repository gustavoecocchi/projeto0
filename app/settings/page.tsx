import { Card } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-semibold'>Configurações</h1>
      <Card>
        <h2 className='mb-2 font-medium'>Preferências da plataforma</h2>
        <ul className='space-y-2 text-sm text-muted'>
          <li>• Tema: Dark (fixo no MVP frontend)</li>
          <li>• Persistência local: mock com Zustand</li>
          <li>• Integrações externas: desabilitadas neste estágio</li>
        </ul>
        <p className='mt-3 text-xs text-muted'>// TODO: persistir configurações em API/backend e salvar por usuário.</p>
      </Card>
    </div>
  );
}

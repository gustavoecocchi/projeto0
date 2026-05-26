import { Card } from '@/components/ui/card';

const stats = [
  ['Projetos ativos', '12'],
  ['Agentes online', '7'],
  ['Memórias indexadas', '8.421'],
  ['Tokens economizados', '34%']
];

export default function DashboardPage() {
  return (
    <div className='space-y-6'>
      <h1 className='text-2xl font-semibold'>Dashboard</h1>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4'>
        {stats.map(([label, value]) => (
          <Card key={label}>
            <p className='text-sm text-muted'>{label}</p>
            <p className='mt-2 text-2xl font-bold'>{value}</p>
          </Card>
        ))}
      </div>
      <Card>
        <h2 className='mb-2 font-medium'>Atividade recente</h2>
        <p className='text-sm text-muted'>Codex concluiu uma implementação simulada no módulo frontend.</p>
      </Card>
    </div>
  );
}

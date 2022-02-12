export function formatTime(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    timeStyle: 'short',
  }).format(date);
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'medium',
  }).format(date);
}

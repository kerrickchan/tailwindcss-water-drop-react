import { DetailedHTMLProps, PropsWithChildren } from 'react';

export function WaterDropView({ className = '', children }: PropsWithChildren<DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>) {
  return (
    <div className={`relative${className ? ' ' + className : ''}`}>
      <i className='absolute w-[250px] h-[250px] shadow-water dark:shadow-white/50 rounded-water'></i>
      <i className='absolute w-6 h-6 bg-white rounded-water top-14 left-8'></i>
      {children}
    </div>
  )
}

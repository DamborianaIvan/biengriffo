import FadeContent from '../reactbits/FadeContent';
import useReducedMotion from '../../hooks/useReducedMotion';

export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div', ...props }) {
  const reduced = useReducedMotion();
  if (reduced) return <Tag className={className} {...props}>{children}</Tag>;
  return <FadeContent as={Tag} {...props} className={className} duration={650} delay={delay * 1000}
    threshold={0.12} blur>{children}</FadeContent>;
}

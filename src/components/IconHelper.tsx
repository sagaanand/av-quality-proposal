import React from 'react';
import { 
  Award, 
  Leaf, 
  ShieldCheck, 
  Lock, 
  UtensilsCrossed, 
  Stethoscope, 
  Cpu, 
  Rocket, 
  Target, 
  Globe2, 
  LineChart, 
  UserCheck, 
  BadgePercent, 
  CalendarCheck, 
  FileCheck, 
  TrendingUp, 
  BarChart3,
  CheckCircle2,
  Clock,
  Sparkles,
  Layers,
  ArrowRight,
  GraduationCap,
  Compass
} from 'lucide-react';

interface IconHelperProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className = "w-5 h-5", size }) => {
  switch (name) {
    case 'Award': return <Award className={className} size={size} />;
    case 'Leaf': return <Leaf className={className} size={size} />;
    case 'ShieldCheck': return <ShieldCheck className={className} size={size} />;
    case 'Lock': return <Lock className={className} size={size} />;
    case 'UtensilsCrossed': return <UtensilsCrossed className={className} size={size} />;
    case 'Stethoscope': return <Stethoscope className={className} size={size} />;
    case 'Cpu': return <Cpu className={className} size={size} />;
    case 'Rocket': return <Rocket className={className} size={size} />;
    case 'Target': return <Target className={className} size={size} />;
    case 'Globe2': return <Globe2 className={className} size={size} />;
    case 'LineChart': return <LineChart className={className} size={size} />;
    case 'UserCheck': return <UserCheck className={className} size={size} />;
    case 'BadgePercent': return <BadgePercent className={className} size={size} />;
    case 'CalendarCheck': return <CalendarCheck className={className} size={size} />;
    case 'FileCheck': return <FileCheck className={className} size={size} />;
    case 'TrendingUp': return <TrendingUp className={className} size={size} />;
    case 'BarChart3': return <BarChart3 className={className} size={size} />;
    case 'CheckCircle2': return <CheckCircle2 className={className} size={size} />;
    case 'Clock': return <Clock className={className} size={size} />;
    case 'Sparkles': return <Sparkles className={className} size={size} />;
    case 'Layers': return <Layers className={className} size={size} />;
    case 'ArrowRight': return <ArrowRight className={className} size={size} />;
    case 'GraduationCap': return <GraduationCap className={className} size={size} />;
    case 'Compass': return <Compass className={className} size={size} />;
    default: return <Award className={className} size={size} />;
  }
};

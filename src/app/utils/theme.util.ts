export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
}

export class ThemeManager {
  private static readonly STORAGE_KEY = 'portfolio-theme';
  
  private static readonly themes: Record<string, ThemeColors> = {
    dark: {
      primary: '#e2e8f0',
      secondary: '#0f172a',
      accent: '#3b82f6',
      surface: 'rgba(30, 41, 59, 0.8)',
      textPrimary: '#f8fafc',
      textSecondary: '#cbd5e1'
    },
    blue: {
      primary: '#dbeafe',
      secondary: '#1e3a8a',
      accent: '#60a5fa',
      surface: 'rgba(30, 58, 138, 0.8)',
      textPrimary: '#f0f9ff',
      textSecondary: '#bfdbfe'
    },
    purple: {
      primary: '#e9d5ff',
      secondary: '#581c87',
      accent: '#a855f7',
      surface: 'rgba(88, 28, 135, 0.8)',
      textPrimary: '#faf5ff',
      textSecondary: '#d8b4fe'
    }
  };

  static getCurrentTheme(): string {
    return localStorage.getItem(this.STORAGE_KEY) || 'dark';
  }

  static setTheme(themeName: string): void {
    if (!this.themes[themeName]) {
      console.warn(`Theme "${themeName}" not found. Using default theme.`);
      themeName = 'dark';
    }

    const theme = this.themes[themeName];
    const root = document.documentElement;

    // Apply theme colors to CSS variables
    root.style.setProperty('--primary-color', theme.primary);
    root.style.setProperty('--secondary-color', theme.secondary);
    root.style.setProperty('--accent-color', theme.accent);
    root.style.setProperty('--surface-color', theme.surface);
    root.style.setProperty('--text-primary', theme.textPrimary);
    root.style.setProperty('--text-secondary', theme.textSecondary);

    // Update gradient colors based on accent
    const accentRgb = this.hexToRgb(theme.accent);
    if (accentRgb) {
      root.style.setProperty('--gradient-accent', 
        `linear-gradient(135deg, ${theme.accent} 0%, ${this.darkenColor(theme.accent, 20)} 100%)`);
    }

    localStorage.setItem(this.STORAGE_KEY, themeName);
  }

  static getAvailableThemes(): string[] {
    return Object.keys(this.themes);
  }

  static initializeTheme(): void {
    const savedTheme = this.getCurrentTheme();
    this.setTheme(savedTheme);
  }

  private static hexToRgb(hex: string): {r: number, g: number, b: number} | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  private static darkenColor(hex: string, percent: number): string {
    const rgb = this.hexToRgb(hex);
    if (!rgb) return hex;

    const factor = (100 - percent) / 100;
    const r = Math.round(rgb.r * factor);
    const g = Math.round(rgb.g * factor);
    const b = Math.round(rgb.b * factor);

    return `rgb(${r}, ${g}, ${b})`;
  }
}
interface UserDefaults {
	// The absence of a value represents 'system'
	colorThemeOverride?: 'dark' | 'light';
}

interface GameSettings {
	// Known up-front properties
	speed: 'fast' | 'medium' | 'slow';
	quality: 'high' | 'low';
	// Assume anything unknown to the interface
	// is a string.
	[key: string]: string;
}

interface EnvironmentVars {
	NAME: string;
	OS: string;
	// Unknown properties are covered by this index signature.
	[propName: string]: string;
}

declare const env: EnvironmentVars;

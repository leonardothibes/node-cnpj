/**
 * Validação de CNPJ.
 *
 * @param cnpj CNPJ com ou sem máscara
 */
export var validate: (cnpj: string) => boolean;

/**
 * Verifica se um CNPJ está ou não com máscara.
 */
export var isMasked: (cnpj: string) => boolean;

/**
 * Aplica a máscara num CNPJ.
 */
export var mask: (cnpj: string) => string;

/**
 * Remove máscara de um CNPJ.
 */
export var unMask: (cnpj: string) => string;

/**
 * Gera um CNPJ aleatório.
 *
 * @param masked Com máscara ou sem
 */
export var generate: (masked?: boolean) => string;

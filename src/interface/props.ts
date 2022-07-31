/**
 * Interface composée de :
 * * `title` *(string)* : Titre à associer.
 * * `color?` *(string)* : Couleur appliqué au titre.
 * * `horizontal_space?` *(number)* : Hauteur appliquée entre le titre et ce qui suit.
 * * `font_size?` *(number)* : Taille de police du titre.
 */
export interface TitleProps {
    /** Titre à associer. */
    title: string,
    /** Couleur appliqué au titre. */
    color?: string,
    /** Hauteur appliquée entre le titre et ce qui suit. */
    horizontal_space?: number,
    /** Taille de police du titre. */
    font_size?: number
}

/**
 * Interface composée de :
 * * `text?` *(string)* : Texte à associer.
 * * `color?` *(string)* : Couleur appliqué au texte.
 * * `font_size?` *(number)* : Taille de police du texte.
 * * `text_align?` *("center" | "auto" | "left" | "right" | "justify")* : L'alignement appliqué au texte.
 */
 export interface TextProps {
    /** Texte à associer. */
    text?: string,
    /** Couleur appliqué au texte. */
    color?: string,
    /** Taille de police du texte. */
    font_size?: number,
    /** L'alignement appliqué au texte */
    text_align?: "center" | "auto" | "left" | "right" | "justify"
}

/**
 * Interface composée de :
 * * `width` *(number)* : Espace horizontal appliqué entre deux éléments.
 * * `height` *(number)* : Espace vertical appliqué entre deux éléments.
 */
export interface SpacerProps {
    /** Espace horizontal appliqué entre deux éléments. */    
    width?: number,
    /** Espace vertical appliqué entre deux éléments. */
    height?: number
}
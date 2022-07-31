import { FlexAlignType, StyleProp, TextStyle, ViewStyle } from "react-native";
import { color } from "../variable/color";
import { fontSize } from "../variable/font-size";

/**
 * Style permettant de déterminer les positionnement de différents objets via flex.
 * 
 * @param direction Direction appliqué aux objets, i.e. "row", "column", etc
 * @param align_items Alignement horizontale / veticale des objets 
 * @param justify_content Alignement verticale / horizontal des objets 
 * @returns Positionnement des différetns objets
 */
export const flex = (
    direction: "row" | "column" | "row-reverse" | "column-reverse" | undefined,
    align_items?: FlexAlignType | undefined,
    justify_content?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | undefined
): StyleProp<ViewStyle> => {
    return {
        flexDirection: direction,
        alignItems: align_items,
        justifyContent: justify_content
    }
}

/**
 * Style permettant de déterminer la largeur et le hauteur d'un élément.
 * 
 * @param width Largeur appliquée à l'élément
 * @param height Hauteur appliquée à l'élément
 * @returns StyleProp<ViewStyle>
 */
export const width_height = (width?: string | number, height?: string | number): StyleProp<ViewStyle> => {
    return {
        width: width,
        height: height
    }
}

/**
 * Style relatif à un texte.
 * 
 * @param color_text Couleur du texte. Elle est posé par défaut à noir.
 * @param font_size Taille de la police du texte. Elle est posé par défaut à 18.
 * @param text_align L'alignement du texte
 * @returns Style correspondant à un texte
 */
export const text = (color_text: string = color.text, text_align: "center" | "auto" | "left" | "right" | "justify" = "justify", font_size: number = fontSize.text): StyleProp<TextStyle> => {
    return {
        color: color_text,
        fontSize: font_size,
        textAlign: text_align,
        fontFamily: 'PoppinsLight'
    }
}

/**
 * Style relatif à un titre
 * 
 * @param color_title Couleur du titre
 * @param font_size La taille de police du titre
 * @param text_align L'alignement d'un titre
 * @returns Style correspondant à un titre
 */
export const title = (color_title: string = color.text, font_size: number = fontSize.title, text_align?: "center" | "auto" | "left" | "right" | "justify"): StyleProp<TextStyle> => {
    return {
        color: color_title,
        textAlign: text_align,
        fontWeight: 'bold',
        fontSize: font_size,
        fontFamily: 'PoppinsBold'
    }
}
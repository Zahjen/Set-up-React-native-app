import React from "react";
import { Text } from "react-native";
import { TextProps } from "../interface/props";
import { text } from "../style/global";

/**
 * Composant permettant de générer un titre.
 * 
 * ---
 * 
 * `TextProps` : Interface composée de :
 * * `text?` *(string)* : Texte à associer.
 * * `color?` *(string)* : Couleur appliqué au texte.
 * * `font_size?` *(number)* : Taille de police du texte.
 * * `text_align?` *("center" | "auto" | "left" | "right" | "justify")* : L'alignement appliqué au texte.
 * 
 * ---
 * 
 * @param props `TextProps`
 * @returns Composant MyText
 */
const MyText: React.FC<TextProps> = (props: TextProps): JSX.Element => {

    return (
        <Text style = { text(props.color, props.text_align, props.font_size) }>
            { props.text }
        </Text>
    );

}

/** Les paramètres par défaut que prendra le composant */
MyText.defaultProps = {
    
}

export default MyText;
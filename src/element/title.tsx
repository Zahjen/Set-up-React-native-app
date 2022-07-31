import React from "react";
import { View, Text } from "react-native";
import { TitleProps } from "../interface/props";
import { title, width_height } from "../style/global";
import { spacer } from "../variable/spacer";
import Spacer from "./spacer";

/**
 * Composant permettant de générer un titre.
 * 
 * ---
 * 
 * `TitleProps` : Interface composée de :
 * * `title` *(string)* : Titre à associer.
 * * `color?` *(string)* : Couleur appliqué au titre.
 * * `horizontal_space?` *(number)* : Hauteur appliquée entre le titre et ce qui suit.
 * * `font_size?` *(number)* : Taille de police du titre.
 * 
 * ---
 * 
 * @param props `TitleProps`
 * @returns Composant Title
 */
const Title: React.FC<TitleProps> = (props: TitleProps): JSX.Element => {

    return (
        <View style = { width_height("100%") }>
            <Text style = { title(props.color, props.font_size) }>
                { props.title }
            </Text>
            <Spacer height = { props.horizontal_space }/>
        </View>
    );

}



/** Les paramètres par défaut que prendra le composant */
Title.defaultProps = {
    horizontal_space: spacer.space_title.bottom,
}

export default Title;
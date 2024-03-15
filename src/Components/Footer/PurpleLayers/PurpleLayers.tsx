import {View, Image} from 'react-native';

export default function PurpleLayers() {
    const layers = [
        require("src/assets/Circles/Círculo-morado-1.png"),
        require("src/assets/Circles/Círculo-morado-2.png"),
        require("src/assets/Circles/Círculo-morado-3.png"),
    ]

    return (
        <>
            {layers.map((layer, index) => (
                <Image
                    key={index}
                    source={layer}
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: 350-(index*50),
                        bottom: "-30%",
                        left: 0,
                    }}
                />
            ))}
        </>
    )
}
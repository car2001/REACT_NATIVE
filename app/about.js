import { Link } from "expo-router";
import { Pressable, ScrollView, Text } from "react-native";
import { HomeIcon } from "../components/Icons";

export default function About(){
    return (
        <ScrollView>
            <Link asChild href="/" >
                <Pressable>
                    {({ pressed }) => <HomeIcon style={{ opacity: pressed ? 0.5 : 1 }} />}
                </Pressable>
            </Link>

            <Text className="text-white font-bold mb-8 text-2xl">Sobre el proyecto</Text>

            <Text className="text-white text-white/90 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text className="text-white text-white/90 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
            <Text className="text-white text-white/90 mb-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
        </ScrollView>
    )
}
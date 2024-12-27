import { useEffect, useState } from "react";

import { View, ActivityIndicator, FlatList} from "react-native";
import { getLatestGames } from "../lib/metacritic";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedGameCard } from "./GameCard"
import { Logo } from "./Logo";

export function Main() {
  const [games, setGames] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestGames().then((games) => {
      setGames(games);
    });
  }, []);

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1 }}>
      <View style={{ marginBottom: 20 }} >
        <Logo/>
      </View>
      {games.length === 0 
        ? (
          <View>
            <ActivityIndicator/>
          </View>
        ) 
        : (
          <FlatList
            data={games}
            keyExtractor={game => game.slug}
            renderItem={({item, index}) => <AnimatedGameCard game={item} index={index} />}>
          </FlatList>
        )
      }
    </View>
  );
}

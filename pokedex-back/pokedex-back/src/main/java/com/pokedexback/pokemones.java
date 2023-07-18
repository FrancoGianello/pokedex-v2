package com.pokedexback;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.util.List;
import java.util.ArrayList;
@RestController
public class pokemones {

	@GetMapping("/pokemonList")
	public List<String> pokemonList() throws IOException {
		int maxPokemon = 1010;
		WebClient.Builder builder = WebClient.builder();
		List<String> reponseArray = new ArrayList<>();
		for (int i = 1; i <= maxPokemon; i++) {
			String url =  "https://pokeapi.co/api/v2/pokemon/"+i;
			String responseAux = builder.
					build().
					get().
					uri(url).
					retrieve().
					bodyToMono(String.class).
					block();
			reponseArray.add(responseAux);
			
			
		}
		return reponseArray;
	}

}

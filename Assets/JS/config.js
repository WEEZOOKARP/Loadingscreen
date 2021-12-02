var video_ID = "naWMGMO5FUA" // ID de la video Youtube
var mp3_player = true // Si true, le lecteur MP3 sera utilisé et le son de vidéo youtube coupé

var start = 22 // Permets de définir à partir de combien de secondes la vidéo Youtube doit commencer

var img = "logo.png" // Le nom de fichier du logo de votre serveur (* Il doit se situer dans le dossier : Assets/IMG *)

var Discord_link = "https://discord.gg/QKYnebQ" // Lien de vôtre server Discord

var red_text = "" // Texte en rouge
var blue_text = '' // Texte en bleu

// N'oubliez d'ajouter vos musiques dans le __resource.lua
// Placez vos musiques dans le dossier : Assets/AUIDO
var tracks
tracks = [
{
	"track": 1, // Position dans la liste
	"name": "None", // Le nom qui va apparête
	"duration": "",
	"file": "" // Le nom du fichier MP3 (Il ne doit pas contenir d'espace ou de caractère spéciaux.
},
{
	"track": 2, // Position dans la liste
	"name": "Greippi - Krem Kaakkuja (Second Flight Remix)", // Le nom qui va apparête
	"duration": "",
	"file": "1" // Le nom du fichier MP3 (Il ne doit pas contenir d'espace ou de caractère spéciaux.
},
{
	"track": 3, // Position dans la liste
	"name": "Street Lights - Azertion & JJD Feat", // Le nom qui va apparête
	"duration": "",
	"file": "2" // Le nom du fichier MP3 (Il ne doit pas contenir d'espace ou de caractère spéciaux.
}]
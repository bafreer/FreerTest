for (let index = 0; index < 4; index++) {
    music.setVolume(53)
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.setVolume(113)
    music.playTone(659, music.beat(BeatFraction.Whole))
    music.setVolume(212)
    music.playTone(988, music.beat(BeatFraction.Whole))
}
basic.forever(function () {
	
})

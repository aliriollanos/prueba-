input.onButtonPressed(Button.A, function () {
    basic.showString("indalo")
    music.play(music.tonePlayable(523, music.beat(BeatFraction.Whole)), music.PlaybackMode.LoopingInBackground)
})
basic.forever(function () {
	
})

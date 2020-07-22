extends Panel

var accum = 0
var accum2 = 0

func _ready():
	$Button.connect("pressed", self, "_on_Button_pressed")
	
	
func _on_Button_pressed():
	$Label.text = "Hello!"
	
func _process(delta):
	accum += 1
	$Label.text = str(accum) # 'text' is a built-in label property.
	
func _physics_process(delta):
	accum2 += 1
	$Label2.text = str(accum2) # 'text' is a built-in label property.


func _on_Timer_timeout():
	$Sprite.visible = !$Sprite.visible

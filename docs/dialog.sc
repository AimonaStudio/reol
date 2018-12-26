# this is a comment and will not parse
# [command flag param="value"]
GET context
const name = 'himself65'

# [dialog next] --> dialog.next()
if context.type == dialog and context.clicked
  [dialog next]
  exit

if context.type == sprite
  const player = context.sprite

# [player move=left] --> player.move('left')

if player.keyboard == 'A'
  [player move=left]
else if player.keyboard == 'W'
  [player move=up]
else if player.keyboard == 'S'
  [player move=down]
else if player.keyboard == 'D'
  [player move=right]

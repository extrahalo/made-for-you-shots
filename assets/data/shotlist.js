// «Сделано для тебя / Made for You» — шотлист v1 (150 шотов, 16 секций, 35 сцен-якорей).
// Порядок массива = монтажный порядок. Номер кадра = позиция + 1.
// imagePrompt содержит ТОЛЬКО уникальное для кадра — движок оборачивает его блоками
// стиля, идентичности, действия и сценовой связности из project.json.
// videoPrompt НЕ заполняется здесь: его пишут по ГОТОВОМУ кадру, а не по тексту шотлиста.
// ВАЖНО: тело файла — строгий JSON (build_jobs.py парсит его через json.loads).
window.SHOTLIST = [
 {
  "id": "B-01",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Открытие фильма",
  "title": "Резец по дереву",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Чёрный экран, только звук. Экстремальный крупный план резца, снимающего стружку.",
  "audio": "Скобление резца, щелчок пружины, тихий звон механизма.",
  "imagePrompt": "Extreme macro close-up of a sharp steel chisel blade peeling a long curl of pale wood shaving off a block of warm honey-coloured wood. A single shaft of dawn light rakes across the cut, catching the airborne dust. Deep shadow all around the lit sliver of wood. No people, no hands visible."
 },
 {
  "id": "S01-1",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Мастерская просыпается",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Общий статичный план мастерской-кухни на рассвете. Арман заканчивает игрушку.",
  "audio": "Шорох стружки, тихий городской гул, чайник.",
  "imagePrompt": "Wide static establishing shot of a home workshop that flows straight into a small apartment kitchen. Early dawn light comes through one tall window, amber and low, cutting through fine sawdust in the air. Open shelves along the wall are crowded with hand-carved wooden birds, little cars and lidded boxes; finished toys are packed into flat cardboard boxes stacked on the long workbench. Hand tools hang on a pegboard. A kettle sits on the stove at the far end. ARMAN stands at the workbench with his back three-quarters to us, bent over a small wooden bird, working a file. A dark hallway opens at the left edge of the frame."
 },
 {
  "id": "S01-2",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Айлин входит из коридора",
  "shotType": "medium",
  "runtime": "3s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Шестилетняя Айлин выходит из тёмного коридора в тёплый свет мастерской.",
  "audio": "Босые шаги по полу.",
  "imagePrompt": "Six-year-old AILIN steps out of a dark hallway into the warm amber light of the workshop, one hand still trailing on the door frame, hair sleep-tousled. She is small in the doorway; the lit workshop opens up beyond her. She is looking towards the workbench, not at us."
 },
 {
  "id": "S01-3",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Взгляд на выключатель",
  "shotType": "medium",
  "runtime": "3s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Айлин смотрит вверх на выключатель, который висит слишком высоко.",
  "audio": "Тихо; городской гул за окном.",
  "imagePrompt": "Low side-angle on AILIN standing at the wall below an old-fashioned light switch mounted high up, out of a small child's reach. She tilts her head back to look up at it, weight shifted onto one foot, arms hanging. The switch is high in frame, she is small at the bottom — the composition itself states the barrier."
 },
 {
  "id": "S01-4",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Пальцы на тугой клавише",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Плечо дрожит, пальцы касаются клавиши, но нажать не выходит.",
  "audio": "Напряжённое дыхание; музыка редеет.",
  "imagePrompt": "Tight close-up of a small child's hand stretched up as far as it will go, fingertips just brushing the stiff plastic paddle of a wall switch. The arm is extended past comfort, the small shoulder visible at the bottom of frame is trembling with the effort, tendons showing in the wrist. The fingers press and slip off the paddle without moving it."
 },
 {
  "id": "S01-5",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Заводная птица на столе",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [],
  "synopsis": "На верстаке стоит заводная деревянная птица с крошечным ключиком.",
  "audio": "Тишина.",
  "imagePrompt": "Insert on the workbench: a beautifully made clockwork wooden bird the size of two fists, its wings folded, standing on two carved legs. A tiny brass winding key, barely bigger than a fingernail, is set into its flank. Warm morning light rakes across the grain of the wood. No people in frame."
 },
 {
  "id": "S01-6",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Ключик не поворачивается",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Айлин пробует повернуть крошечный ключ и не справляется.",
  "audio": "Скрип пальцев по латуни.",
  "imagePrompt": "Close-up over AILIN's small hands as she pinches the tiny brass winding key of the wooden bird between thumb and forefinger and tries to turn it. Her knuckles whiten, the key does not move, her fingers slip off the metal. Her face is just visible at the top of frame, concentrated, tongue caught between her teeth — not sad, working the problem."
 },
 {
  "id": "S01-7",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Табуретка",
  "shotType": "medium",
  "runtime": "3s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Девочка тянет к стене тяжёлую табуретку.",
  "audio": "Скрип ножки табуретки по полу.",
  "imagePrompt": "AILIN drags a heavy wooden stool across the floor towards the wall beneath the switch, leaning her whole small body backwards into the pull, both hands on one leg of the stool. Motion blur on the stool's foot. The workshop is warm and out of focus behind her."
 },
 {
  "id": "S01-8",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Отец придерживает",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06",
   "CH-ARMAN38"
  ],
  "synopsis": "Арман успевает придержать табуретку, но не включает свет и не заводит игрушку.",
  "audio": "Затем тишина.",
  "imagePrompt": "AILIN has one knee up on the stool, about to climb. ARMAN's big hand arrives on the edge of the stool, steadying it — he is crouched down beside her, not lifting her, not scolding, just holding it level. He is not looking at the switch; he is looking at her hand."
 },
 {
  "id": "S01-9",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Взгляд отца: ключ, ладонь, выключатель",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Арман переводит взгляд между выключателем, ключом и её ладонью — рождается решение.",
  "audio": "Тишина.",
  "imagePrompt": "Close-up on ARMAN's face at a child's height, lit warm from the window. His eyes move — we catch him mid-thought, the moment an idea lands: the faintest lift at the corner of his mouth, brows drawing together. Out of focus in the foreground is a small open child's palm; the high wall switch is a soft bright shape in the deep background."
 },
 {
  "id": "S01-10",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Монтаж: рождается рычаг",
  "shotType": "insert",
  "runtime": "5s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Арман вырезает длинный деревянный рычаг с маленькой птицей на конце.",
  "audio": "Пила, напильник и отвёртка складываются в ритм.",
  "imagePrompt": "Tight working insert: ARMAN's work-worn hands shaping a long slim wooden lever with a small carved bird at its tip, the file moving in short confident strokes, pale sawdust falling through the light onto the bench. Only hands, forearms and the work are in frame."
 },
 {
  "id": "S01-11",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская на рассвете",
  "title": "Насадка на ключ",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Он делает большую съёмную насадку на заводной ключ и ослабляет пружину.",
  "audio": "Отвёртка; щелчок пружины.",
  "imagePrompt": "Insert on the bench: a chunky, comfortable wooden knob — a big easy-grip collar that slips over the bird's tiny brass key — lying finished beside the toy. ARMAN's hand tests the turn with two fingers, then a small screwdriver eases the spring inside the bird half a turn looser. Shallow focus on the wooden knob."
 },
 {
  "id": "S01-12",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская, следующее утро",
  "title": "Свет включается сам",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [
   "CH-AILIN06",
   "CH-ARMAN38"
  ],
  "synopsis": "Тот же общий план. Айлин опускает низкий рычаг — свет включается.",
  "audio": "Мягкий щелчок; музыка раскрывается.",
  "imagePrompt": "The exact same wide framing of the workshop as the opening shot, next morning. A long slim wooden lever now runs down the wall from the high switch and ends in a small carved bird at a child's shoulder height. AILIN presses the bird end down with the flat of her palm — the ceiling light comes on and floods the room warm. ARMAN watches from behind the workbench without moving to help."
 },
 {
  "id": "S01-13",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская, следующее утро",
  "title": "Она заводит птицу сама",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Айлин надевает большую насадку на ключ и сама заводит птицу.",
  "audio": "Лёгкий деревянный треск механизма.",
  "imagePrompt": "Close-up: AILIN's whole small hand closes easily around the chunky wooden knob fitted over the bird's key and turns it — the grip is broad enough that her wrist does the work instead of her fingertips. The mechanism clicks over. Her face above is lit with concentration turning into delight."
 },
 {
  "id": "S01-14",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская, следующее утро",
  "title": "Птица делает шаг",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [],
  "synopsis": "Игрушка делает несколько шагов по столу.",
  "audio": "Деревянный перезвон механизма.",
  "imagePrompt": "Low insert along the surface of the workbench: the clockwork wooden bird walks forward on its two carved legs, wings lifting and settling with each step, brass linkage turning visibly at its flank. Morning light behind it makes a long soft shadow across the wood."
 },
 {
  "id": "S01-15",
  "section": "Сцена 01. Слишком высоко",
  "scene": "Мастерская, следующее утро",
  "title": "Отец не вмешивается",
  "shotType": "reaction",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Арман наблюдает из-за верстака и улыбается, не вмешиваясь.",
  "audio": "Музыка раскрывается.",
  "imagePrompt": "Reaction on ARMAN behind the workbench, hands deliberately still and flat on the wood, deliberately NOT reaching in. He watches his daughter off-frame with a quiet proud smile, eyes bright. Warm morning light on the side of his face."
 },
 {
  "id": "S02-1",
  "section": "Сцена 02. Другие дети",
  "scene": "Площадка у детского центра",
  "title": "Коробка игрушек приехала",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [
   "CH-AILIN06",
   "CH-ARMAN38"
  ],
  "synopsis": "Арман привёз коробку своих игрушек; дети разбирают машинки и птиц.",
  "audio": "Смех, движение, лёгкая уличная музыка.",
  "imagePrompt": "Wide sunny shot of a wooden playground beside a children's centre: a rope climbing frame, a low timber sandpit, smooth paths. ARMAN has set an open cardboard box of hand-made wooden toys down on a bench and six or seven children of mixed ages crowd around it, pulling out little cars and birds. AILIN stands at the edge of the group holding one wooden bird against her chest. Every child has a clearly different face, build and haircut."
 },
 {
  "id": "S02-2",
  "section": "Сцена 02. Другие дети",
  "scene": "Площадка у детского центра",
  "title": "Девочка зовёт к верёвкам",
  "shotType": "medium",
  "runtime": "3s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Одна девочка жестом зовёт Айлин к верёвочной конструкции.",
  "audio": "Детские голоса.",
  "imagePrompt": "A friendly girl of about seven, freckled with two short braids — a completely different child from AILIN — turns back mid-run and waves her arm in a big come-on gesture towards the rope frame. AILIN, in the foreground with her back half to us, starts to follow."
 },
 {
  "id": "S02-3",
  "section": "Сцена 02. Другие дети",
  "scene": "Площадка у детского центра",
  "title": "Дети взлетают вверх",
  "shotType": "wide",
  "runtime": "3s",
  "refs": [],
  "synopsis": "Дети быстро поднимаются по верёвочной конструкции.",
  "audio": "Натяжение верёвки, топот.",
  "imagePrompt": "Camera at a child's height looking up: three or four children scramble quickly up a rope climbing frame against a bright sky, all limbs and speed, laughing. Their faces are all distinctly different. Nobody looks down."
 },
 {
  "id": "S02-4",
  "section": "Сцена 02. Другие дети",
  "scene": "Площадка у детского центра",
  "title": "Айлин пробует подтянуться",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Она хватается за перекладину, подтягивает ногу, плечи дрожат.",
  "audio": "Дыхание становится громче.",
  "imagePrompt": "Close on AILIN gripping the lowest wooden rung of the rope frame with both hands, one foot lifted onto the rope, trying to pull her body upward. Her shoulders shake with the strain, elbows shaking, the tendons standing out in her small forearms. Her face is set and determined, not tearful."
 },
 {
  "id": "S02-5",
  "section": "Сцена 02. Другие дети",
  "scene": "Площадка у детского центра",
  "title": "Она соскальзывает",
  "shotType": "medium",
  "runtime": "3s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Айлин медленно соскальзывает обратно на землю.",
  "audio": "Скрип верёвки.",
  "imagePrompt": "AILIN slides slowly back down until both feet are flat on the ground again, hands still on the rung above her head, breathing hard. The climbing frame towers above her, other children small and high up in the soft background."
 },
 {
  "id": "S02-6",
  "section": "Сцена 02. Другие дети",
  "scene": "Площадка у детского центра",
  "title": "«Всё хорошо»",
  "shotType": "reaction",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Одна девочка оборачивается — Айлин быстро улыбается и показывает, что всё в порядке.",
  "audio": "Смех постепенно удаляется.",
  "imagePrompt": "AILIN looks up towards the climbing children and produces a quick bright reassuring smile, lifting one hand in a small everything-is-fine wave. The smile is a beat too fast — it is for them, not for her. The braided girl, high on the ropes, is already turning back to the climb."
 },
 {
  "id": "S02-7",
  "section": "Сцена 02. Другие дети",
  "scene": "Площадка у детского центра",
  "title": "Игра уходит вперёд",
  "shotType": "wide",
  "runtime": "3s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Детей зовут дальше; никто не смеётся над ней — игра просто уходит.",
  "audio": "Голоса удаляются.",
  "imagePrompt": "Wide shot: the group of children streams away across the playground towards something new, a bright moving mass. AILIN takes a few steps after them and is already falling behind, alone in the middle of the empty foreground. Nobody is mocking her, nobody looks back — the game has simply moved on."
 },
 {
  "id": "S02-8",
  "section": "Сцена 02. Другие дети",
  "scene": "Площадка у детского центра",
  "title": "У песочницы, будто сама выбрала",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Айлин устаёт и садится у песочницы, будто сама выбрала одиночную игру.",
  "audio": "Музыка становится почти неслышной.",
  "imagePrompt": "AILIN sits down on the timber edge of the sandpit and busies her hands in the sand, arranging it with great seriousness — the posture of a child performing that this was her own choice. The playground noise is far away behind her. Beside her on the timber lies an unwound wooden toy with a key far too small for her fingers."
 },
 {
  "id": "S02-9",
  "section": "Сцена 02. Другие дети",
  "scene": "Площадка у детского центра",
  "title": "Отец с коробкой ярких игрушек",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Арман стоит с коробкой игрушек, предназначенных другим детям, и улыбается дочери.",
  "audio": "Городской шум глохнет.",
  "imagePrompt": "ARMAN stands holding the half-empty box of bright hand-made toys meant for other people's children, watching his daughter off-frame. He is smiling — an open, easy, entirely convincing smile held for her benefit."
 },
 {
  "id": "S02-10",
  "section": "Сцена 02. Другие дети",
  "scene": "Площадка у детского центра",
  "title": "Слеза рабочей ладонью",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Он отворачивается, прижимает коробку к груди и быстро вытирает слезу рабочей ладонью.",
  "audio": "Один приглушённый вздох.",
  "imagePrompt": "Close-up: ARMAN has turned away, the box pressed hard against his chest with one arm. With the heel of his other work-worn hand he wipes once, fast and rough, across his eye — a movement so quick it is almost hidden. His jaw is tight. The playground is a bright blur behind him."
 },
 {
  "id": "S03-1",
  "section": "Сцена 03. Диагноз",
  "scene": "Кабинет врача",
  "title": "Айлин рисует птицу",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06",
   "CH-ARMAN38"
  ],
  "synopsis": "Общий план кабинета: Айлин рисует птицу на бумаге, Арман рядом.",
  "audio": "Нейтральный шум клиники.",
  "imagePrompt": "Wide shot of a calm, softly lit paediatric consulting room — pale walls, a low examination couch, a plant, a window with slatted light. AILIN kneels at a low table drawing a bird in wax crayon, absorbed. ARMAN sits on a chair behind her, elbows on knees. A DOCTOR — a woman in her forties with short grey-streaked hair, a completely different face from anyone else — unrolls a soft mat onto the floor."
 },
 {
  "id": "S03-2",
  "section": "Сцена 03. Диагноз",
  "scene": "Кабинет врача",
  "title": "Просьба сесть и встать",
  "shotType": "medium",
  "runtime": "3s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Врач жестом просит её сесть на коврик, а затем подняться.",
  "audio": "Шорох одежды.",
  "imagePrompt": "The doctor crouches to AILIN's level and makes a simple, friendly gesture towards the mat — sit down, then stand up for me. AILIN sits down on the mat cross-legged, looking up at her, entirely unbothered, treating it as a game."
 },
 {
  "id": "S03-3",
  "section": "Сцена 03. Диагноз",
  "scene": "Кабинет врача",
  "title": "Ладонями по полу",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Поднимаясь, Айлин опирается ладонями на пол.",
  "audio": "Только одежда и дыхание; музыки нет.",
  "imagePrompt": "AILIN pushing herself up off the mat: she has turned onto all fours and is planting both palms flat on the floor, hips lifted, head down, taking her weight through her arms. A patient, practical, unhurried movement."
 },
 {
  "id": "S03-4",
  "section": "Сцена 03. Диагноз",
  "scene": "Кабинет врача",
  "title": "Руками по бёдрам",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Она «шагает» руками по собственным бёдрам, чтобы выпрямиться.",
  "audio": "Дыхание.",
  "imagePrompt": "Close on AILIN's small hands walking up her own thighs, one above the other, using her legs as a ladder to bring her torso upright. Her knees are braced. The gesture is matter-of-fact and practised."
 },
 {
  "id": "S03-5",
  "section": "Сцена 03. Диагноз",
  "scene": "Кабинет врача",
  "title": "Улыбка после задания",
  "shotType": "reaction",
  "runtime": "3s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Поднявшись, Айлин улыбается врачу, как после выполненного задания.",
  "audio": "Тишина.",
  "imagePrompt": "AILIN, now standing, turns to the doctor with a bright pleased grin and a small shrug of the shoulders — task completed, what's next. She has no idea she has just shown anyone anything."
 },
 {
  "id": "S03-6",
  "section": "Сцена 03. Диагноз",
  "scene": "Кабинет врача",
  "title": "Схема на планшете",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "На экране: плотное мышечное волокно, тонкое повреждённое и спираль ДНК. Без читаемого текста.",
  "audio": "Мягкий электронный тон.",
  "imagePrompt": "Insert on a tablet screen held in the doctor's hands: three simple clean medical illustrations side by side — a thick healthy muscle fibre, a thinner frayed one, and a DNA double helix — rendered as soft glowing diagrams on a dark field. Absolutely no letters, no numbers, no words, no labels anywhere on the screen or in the frame."
 },
 {
  "id": "S03-7",
  "section": "Сцена 03. Диагноз",
  "scene": "Кабинет врача",
  "title": "Кулак, который он разжимает",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Арман сжимает кулак, затем сознательно разжимает его.",
  "audio": "Возвращается тёплый музыкальный слой.",
  "imagePrompt": "Tight close-up on ARMAN's hand resting on his knee: it closes slowly into a hard white-knuckled fist — then, with visible deliberate effort, opens again, finger by finger, and lies flat and calm on the fabric of his trousers."
 },
 {
  "id": "S03-8",
  "section": "Сцена 03. Диагноз",
  "scene": "Кабинет врача",
  "title": "Две ладони на стекле",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-AILIN06",
   "CH-ARMAN38"
  ],
  "synopsis": "Айлин прикладывает рисунок птицы к окну; отец кладёт свою ладонь рядом с её ладонью на стекле.",
  "audio": "Тёплая тема.",
  "imagePrompt": "AILIN holds her crayon drawing of a bird flat against the window so the daylight shines through the paper and the bird glows. Her small hand is spread on the glass beside it. ARMAN's large hand comes into frame and settles on the glass next to hers — not covering it, just alongside. Backlit, both figures reading as warm silhouettes with the glowing paper bird between them."
 },
 {
  "id": "S04-1",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Кабинет физиотерапии",
  "title": "Показ мягкой поддержки локтя",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06",
   "CH-ARMAN38"
  ],
  "synopsis": "Физиотерапевт показывает Арману мягкую поддержку локтя и безопасный подъём.",
  "audio": "Спокойный метроном, тихий голос без разборчивых слов.",
  "imagePrompt": "A bright physiotherapy room with a low padded bench, soft mats and a mirrored wall. A PHYSIOTHERAPIST — a broad-shouldered man in his thirties in a plain polo shirt, a clearly different face from ARMAN — demonstrates on AILIN's arm how to cradle a child's elbow from underneath, his palm flat and open. ARMAN leans in close, watching the exact shape of the therapist's hand."
 },
 {
  "id": "S04-2",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Кабинет физиотерапии",
  "title": "Отец повторяет положение рук",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06",
   "CH-ARMAN38"
  ],
  "synopsis": "Арман внимательно повторяет положение рук; показан момент остановки при усталости.",
  "audio": "Метроном.",
  "imagePrompt": "Close two-shot of hands: ARMAN copying the support position, his big palm open beneath AILIN's small elbow, taking almost no weight — just there. Above the hands, at the top of frame, AILIN's face shows the moment she has had enough, and ARMAN is already easing off rather than pushing on."
 },
 {
  "id": "S04-3",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Мастерская: тренажёр становится игрушкой",
  "title": "Дерево, ролики, ленты",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Арман соединяет дерево, ролики, эластичные ленты и мягкие петли.",
  "audio": "Инструменты входят в музыкальный ритм.",
  "imagePrompt": "Working insert on the bench: ARMAN's hands assembling small wooden pulleys, elastic bands and soft fabric loops into a light mechanism. Beside the work lies AILIN's crayon drawing of a bird, weighted down with a chisel — he keeps glancing at it. Warm task light, sawdust, brass screws in a saucer."
 },
 {
  "id": "S04-4",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Мастерская: тренажёр становится игрушкой",
  "title": "Терапия превращается в механизм",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Он превращает терапевтическую задачу в игрушечный механизм.",
  "audio": "Ритм инструментов.",
  "imagePrompt": "The finished object held up in ARMAN's hands against the window light: a wall-mounted wooden bird with hinged, jointed wings and a soft fabric pull-loop hanging from a cord — plainly a toy, not a piece of medical equipment, warm and beautifully made."
 },
 {
  "id": "S04-5",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Детская: птица с крыльями",
  "title": "Птица на стене",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "На стене детской установлена птица с подвижными крыльями.",
  "audio": "Деревянные щелчки.",
  "imagePrompt": "Wide shot of a small child's bedroom in warm evening light — a low bed, drawings pinned to the wall, shelves of wooden toys. Mounted at the centre of the wall is the wooden bird with hinged wings, a soft loop hanging from it within AILIN's reach. She stands facing it, small in the frame, reaching for the loop."
 },
 {
  "id": "S04-6",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Детская: птица с крыльями",
  "title": "Крыло поднимается наполовину",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Айлин тянет петлю; крыло поднимается лишь наполовину.",
  "audio": "Скрип шарнира.",
  "imagePrompt": "Close-up: AILIN's hand hooked into the soft fabric loop, pulling down. Above her, the bird's wooden wing lifts only halfway and stalls, quivering. Her arm is fully extended, her shoulder trembling at the limit of its strength."
 },
 {
  "id": "S04-7",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Детская: птица с крыльями",
  "title": "Отец отбивает темп и паузу",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06",
   "CH-ARMAN38"
  ],
  "synopsis": "Арман пальцами отбивает спокойный темп и показывает короткую паузу. Вторая попытка удаётся лучше.",
  "audio": "Мягкий перезвон.",
  "imagePrompt": "ARMAN sits on the floor a little way off, deliberately not within helping distance, tapping a slow calm rhythm on his own knee with two fingers and then holding his palm still — rest here. AILIN, at the wall, lets her arm drop, breathes, and reaches again; this time the wooden wing sweeps fully up and open behind her."
 },
 {
  "id": "S04-8",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Квартира: бытовые адаптации",
  "title": "Петля на дверце шкафа",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Широкая тканевая петля позволяет открыть шкаф движением предплечья.",
  "audio": "Тихий щелчок дверцы.",
  "imagePrompt": "In the apartment kitchen: a broad soft fabric loop is fixed to a cupboard door handle. AILIN hooks her whole forearm through it and opens the door with a simple swing of her arm, no grip needed at all. The adaptation is homely and warm — woven fabric, wooden handle — not clinical."
 },
 {
  "id": "S04-9",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Квартира: бытовые адаптации",
  "title": "Лёгкая чашка",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Айлин сама достаёт лёгкую чашку.",
  "audio": "Керамика о полку.",
  "imagePrompt": "Insert: AILIN's two small hands taking a light unglazed cup down from a low shelf, cradling it from underneath with both palms rather than gripping the handle. The shelf has been set at exactly her height."
 },
 {
  "id": "S04-10",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Квартира: бытовые адаптации",
  "title": "Кувшин в поворотной подставке",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Кувшин стоит в поворотной деревянной подставке; Айлин наклоняет его одним пальцем.",
  "audio": "Вода, короткий смешок.",
  "imagePrompt": "Close-up: a heavy ceramic jug sits cradled in a beautifully turned wooden pivot stand on the table. AILIN tips the whole cradle with one finger and the jug pours a clean arc of water into the cup below. A few drops spill onto the table and she laughs at herself."
 },
 {
  "id": "S04-11",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Квартира: бытовые адаптации",
  "title": "Он не забирает кувшин",
  "shotType": "reaction",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Отец сдерживает желание взять кувшин и лишь пододвигает полотенце ближе.",
  "audio": "Ткань по столу.",
  "imagePrompt": "ARMAN in the doorway, one hand half-lifted and then consciously lowered. Instead of taking the jug, he simply slides a folded cloth a little closer across the table with two fingers, and leaves it at that. His face: restraint, and love expressed as restraint."
 },
 {
  "id": "S04-12",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Квартира: бытовые адаптации",
  "title": "Магнитные застёжки",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "Крупные магнитные застёжки на куртке соединяются одной рукой.",
  "audio": "Чёткие магнитные щелчки.",
  "imagePrompt": "AILIN standing in the hallway in her jacket, closing big round magnetic fasteners one-handed — she simply brings the two halves near each other and they snap together by themselves. She opens and closes them several times over, delighted with the sound and with doing it herself."
 },
 {
  "id": "S04-13",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Мастерская: переделка игрушек",
  "title": "Ключ становится больше",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Арман переделывает собственные игрушки: увеличивает ключ, облегчает рычаг, расширяет основание.",
  "audio": "Ритм тестов: щелчок — пауза — переделка.",
  "imagePrompt": "Insert comparison on the bench: ARMAN's hands set a newly carved, generously oversized winding key down beside the original tiny brass one. Around them on the wood lie a longer lighter lever, a wider stable base and a chunky comfortable handle — the same toy, redesigned three times over."
 },
 {
  "id": "S04-14",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Мастерская: переделка игрушек",
  "title": "Большой палец показывает, где тяжело",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN06",
   "CH-ARMAN38"
  ],
  "synopsis": "Айлин тестирует каждую версию и показывает большим пальцем, где всё ещё тяжело.",
  "audio": "Щелчок — пауза — переделка.",
  "imagePrompt": "AILIN at the workbench on a tall stool, working a toy's mechanism with total seriousness, then turning her small hand thumb-down towards ARMAN — still too stiff. He nods, already reaching for the file. They are colleagues, and the shot should read that way."
 },
 {
  "id": "S04-15",
  "section": "Сцена 04. Упражнение становится игрой",
  "scene": "Мастерская: дети приходят",
  "title": "Одна игрушка подходит всем",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [
   "CH-AILIN06"
  ],
  "synopsis": "В мастерскую приходят разные дети; одна и та же игрушка подходит всем и не выглядит медицинской.",
  "audio": "Живой детский смех; музыка светлеет.",
  "imagePrompt": "Warm wide shot of the workshop full of different children — one launches a wooden toy using the big easy handle, another winds an identical toy with the ordinary small key, a third rolls one along the floor. Every child has a distinctly different face and build. Nothing in frame looks medical; it is simply a room full of good toys. AILIN is in the middle of them, not apart."
 },
 {
  "id": "S05-1",
  "section": "Сцена 05. Время идёт",
  "scene": "Мастерская сквозь сезоны",
  "title": "За окном снег",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-AILIN10"
  ],
  "synopsis": "Фиксированный план мастерской: за окном снег.",
  "audio": "Музыка развивается через смену сезонов.",
  "imagePrompt": "The fixed wide framing of the workshop, now in winter: heavy snow falling past the window, cold blue daylight fighting the warm lamp inside. AILIN, older, works at the bench. The shelves are fuller than before and a row of children's drawings has begun to climb the wall."
 },
 {
  "id": "S05-2",
  "section": "Сцена 05. Время идёт",
  "scene": "Мастерская сквозь сезоны",
  "title": "За окном лето",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-AILIN10"
  ],
  "synopsis": "Тот же план: летний свет, полки и рычаги стали другой высоты.",
  "audio": "Музыка развивается.",
  "imagePrompt": "The identical fixed wide framing of the workshop in high summer: green light through the open window, the room bright and warm. The shelves have been raised, the wall lever is longer, the tools on the pegboard are bigger. The row of children's drawings now runs the whole length of the wall. AILIN, ten years old, is taller at the same bench."
 },
 {
  "id": "S05-3",
  "section": "Сцена 05. Время идёт",
  "scene": "Упаковка заказов",
  "title": "Айлин упаковывает игрушки",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN10"
  ],
  "synopsis": "Десятилетняя Айлин упаковывает игрушки и приклеивает знак птицы.",
  "audio": "Бумага, лента, тихое вращение шестерёнок.",
  "imagePrompt": "Ten-year-old AILIN packing finished wooden toys into flat boxes with real competence — folding tissue, seating each toy, running tape along a seam. A small stack of paper bird-sign labels sits at her elbow."
 },
 {
  "id": "S05-4",
  "section": "Сцена 05. Время идёт",
  "scene": "Упаковка заказов",
  "title": "Знак птицы на коробке",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [],
  "synopsis": "Она приклеивает на коробку маленький знак птицы.",
  "audio": "Лента.",
  "imagePrompt": "Insert: a small round paper label carrying a simple carved-looking bird mark is pressed down onto the corner of a plain cardboard box by a child's thumb. The mark is a pure graphic silhouette — a bird shape only, absolutely no letters or words."
 },
 {
  "id": "S05-5",
  "section": "Сцена 05. Время идёт",
  "scene": "Упаковка заказов",
  "title": "Пауза и опора под локоть",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN10"
  ],
  "synopsis": "После нескольких коробок рука устаёт; она делает паузу, затем продолжает с опорой под локтем.",
  "audio": "Тихое вращение шестерёнок.",
  "imagePrompt": "Close-up: AILIN's hand stops mid-motion and hovers, shaking slightly. She lowers it, shakes it out once, then slides a shaped wooden forearm rest under her elbow — the same warm workshop wood as everything else — and carries straight on working. No drama, pure routine."
 },
 {
  "id": "S05-6",
  "section": "Сцена 05. Время идёт",
  "scene": "Улица: велосипеды",
  "title": "Адаптированный велосипед",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [
   "CH-AILIN10"
  ],
  "synopsis": "Айлин едет на адаптированном велосипеде рядом со сверстниками.",
  "audio": "Колёса, ветер, лёгкий смех.",
  "imagePrompt": "Wide sunny street shot: four children cycling together along a tree-lined path. AILIN rides an adapted bike — a low frame, broad supportive handlebars, forearm cradles instead of a tight grip — designed to look sporty and desirable rather than medical. She is a little slower and squarely inside the group, not trailing behind it."
 },
 {
  "id": "S05-7",
  "section": "Сцена 05. Время идёт",
  "scene": "Улица: велосипеды",
  "title": "Отец идёт позади с коробкой",
  "shotType": "medium",
  "runtime": "3s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Отец идёт позади с коробкой заказов.",
  "audio": "Ветер.",
  "imagePrompt": "ARMAN walking along the path some distance behind the children with a box of orders under one arm, unhurried, letting the distance be exactly that big on purpose."
 },
 {
  "id": "S05-8",
  "section": "Сцена 05. Время идёт",
  "scene": "Улица: велосипеды",
  "title": "Та же слеза, но с улыбкой",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Он видит дочь среди детей и вытирает новую слезу тем же движением, что на площадке, но теперь улыбается.",
  "audio": "Музыка мягко поднимается.",
  "imagePrompt": "Close-up on ARMAN, echoing the playground shot exactly: the same rough wipe of the heel of his hand across his eye — but this time he is smiling openly while he does it, and he does not turn away from the sight."
 },
 {
  "id": "S06-1",
  "section": "Сцена 06. Дочь становится соавтором",
  "scene": "Мастерская: Айлин 16",
  "title": "Вид сверху на верстак",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-AILIN16",
   "CH-ARMAN38"
  ],
  "synopsis": "Шестнадцатилетняя Айлин, подросток, тестирует новую игрушку; рычаг требует слишком большой силы.",
  "audio": "Механизм тяжело скрипит.",
  "imagePrompt": "Overhead shot looking straight down onto the workbench: tools, shavings, a half-built toy between two pairs of hands. Sixteen-year-old AILIN works a stiff lever on the mechanism and it grinds and sticks. ARMAN's hand is already moving towards a screwdriver at the edge of frame."
 },
 {
  "id": "S06-2",
  "section": "Сцена 06. Дочь становится соавтором",
  "scene": "Мастерская: Айлин 16",
  "title": "«Дай мне попробовать»",
  "shotType": "medium",
  "runtime": "3s",
  "refs": [
   "CH-AILIN16",
   "CH-ARMAN38"
  ],
  "synopsis": "Арман тянется за отвёрткой, но подросток жестом просит дать ей попробовать.",
  "audio": "Скрип затихает.",
  "imagePrompt": "The teenager AILIN lifts one open palm towards her father — wait, let me — without looking up from the mechanism. ARMAN's hand stops mid-reach above the screwdriver and settles back onto the bench. He watches her, amused and interested."
 },
 {
  "id": "S06-3",
  "section": "Сцена 06. Дочь становится соавтором",
  "scene": "Мастерская: Айлин 16",
  "title": "Длиннее рычаг, другая точка опоры",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [
   "CH-AILIN16"
  ],
  "synopsis": "Подросток удлиняет рычаг, меняет точку опоры и ставит более лёгкую пружину.",
  "audio": "Скрип сменяется лёгким щелчком.",
  "imagePrompt": "Insert on the teenager's hands at work: she swaps in a longer lever arm, shifts the pivot pin two holes along, and drops in a visibly finer, lighter spring. Her forearm rests in the shaped wooden support as she works. Precise, unhurried, expert hands."
 },
 {
  "id": "S06-4",
  "section": "Сцена 06. Дочь становится соавтором",
  "scene": "Мастерская: Айлин 16",
  "title": "Отцовский фартук",
  "shotType": "medium",
  "runtime": "5s",
  "refs": [
   "CH-AILIN16",
   "CH-ARMAN38"
  ],
  "synopsis": "Арман проверяет механизм, удивлённо смотрит на дочь и торжественно надевает на неё свой рабочий фартук.",
  "audio": "Тёплая музыкальная вспышка.",
  "imagePrompt": "ARMAN has just tested the mechanism twice and is looking at his teenage daughter with open astonishment. Then, with great ceremony, he lifts his own heavy canvas workshop apron over her head and settles it on her shoulders. It swamps her — the hem hangs to her shins — and she is laughing at herself inside it."
 },
 {
  "id": "S06-5",
  "section": "Сцена 06. Дочь становится соавтором",
  "scene": "Рабочий стол: взрослая Айлин",
  "title": "Взрослая Айлин чертит схемы",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Уже взрослая Айлин чертит схемы, периодически разминая кисть.",
  "audio": "Карандаш, спокойный ритм мастерской.",
  "imagePrompt": "Close on the desk: adult AILIN drafting a mechanism in pencil on paper, precise and fluent. She stops, sets the pencil down, and works the stiffness out of her wrist with her other thumb — then picks it straight back up. The wooden forearm rest is under her arm."
 },
 {
  "id": "S06-6",
  "section": "Сцена 06. Дочь становится соавтором",
  "scene": "Рабочий стол: взрослая Айлин",
  "title": "Незаконченный подарок",
  "shotType": "insert",
  "runtime": "5s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Арман рядом начинает сложную механическую птицу — подарок для неё. Внутри шестерни и пустое место для второго крыла.",
  "audio": "Дерево.",
  "imagePrompt": "Insert on ARMAN's end of the bench: a far more ambitious mechanical wooden bird, half built. Its flank is open, showing a nest of tiny brass gears and linkages inside. One wing is finished and beautiful; on the other side there is only a bare mounting socket and an empty space where the second wing should be."
 },
 {
  "id": "S06-7",
  "section": "Сцена 06. Дочь становится соавтором",
  "scene": "Прихожая: отъезд",
  "title": "Объятие в дверях",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN38"
  ],
  "synopsis": "Айлин уезжает учиться. Она обнимает отца.",
  "audio": "Шум чемодана.",
  "imagePrompt": "Doorway of the apartment, a suitcase standing upright beside them. Adult AILIN hugs her father hard, her face turned into his shoulder; ARMAN holds the back of her head with one big hand. Stairwell daylight from behind, the warm workshop glowing deeper inside the flat."
 },
 {
  "id": "S06-8",
  "section": "Сцена 06. Дочь становится соавтором",
  "scene": "Прихожая: отъезд",
  "title": "Закончу к твоему возвращению",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN38"
  ],
  "synopsis": "Она касается недоделанной птицы; Арман показывает, что закончит её к возвращению, и прячет подарок под ткань.",
  "audio": "Ткань.",
  "imagePrompt": "AILIN's fingers brush the unfinished mechanical bird on the bench, resting for a second on the empty wing socket. ARMAN taps the bird twice with one finger and then makes a small confident gesture — it'll be ready — and draws a soft cloth over it, hiding the gift again."
 },
 {
  "id": "S07-1",
  "section": "Сцена 07. Падение",
  "scene": "Зимнее крыльцо",
  "title": "Зимний общий план у дома",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Арман выходит из мастерской с большой коробкой готовых игрушек к ожидающему курьеру.",
  "audio": "Холодный ветер, далёкий двигатель.",
  "imagePrompt": "Wide winter exterior, cold grey-blue light: ARMAN steps out of the door of the home workshop carrying a large box of finished toys with both arms, breath steaming. A courier van idles at the kerb beyond the low steps. Snow banked along the path, bare trees. The palette has gone cold for the first time in the film."
 },
 {
  "id": "S07-2",
  "section": "Сцена 07. Падение",
  "scene": "Зимнее крыльцо",
  "title": "Корка льда на ступени",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [],
  "synopsis": "На верхней ступени почти незаметная корка льда.",
  "audio": "Ветер.",
  "imagePrompt": "Insert, low and close on the top step: a thin, almost invisible glaze of clear ice across the worn concrete, catching one cold highlight. Nothing else in frame. Utterly ordinary and completely quiet."
 },
 {
  "id": "S07-3",
  "section": "Сцена 07. Падение",
  "scene": "Зимнее крыльцо",
  "title": "Подошва скользит",
  "shotType": "close-up",
  "runtime": "3s",
  "refs": [
   "CH-ARMAN38"
  ],
  "synopsis": "Подошва скользит.",
  "audio": "Короткий срыв дыхания; музыка обрывается.",
  "imagePrompt": "Tight close-up on ARMAN's boot as the sole slides sideways off the iced step, the heel losing the edge, the whole weight of him going with it. Frozen at the instant of the slip."
 },
 {
  "id": "S07-4",
  "section": "Сцена 07. Падение",
  "scene": "Зимнее крыльцо",
  "title": "Камера остаётся на коробке",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Арман прижимает коробку к себе и теряет равновесие. Камера не следует за телом вниз — остаётся на раскрывающейся коробке.",
  "audio": "Обрыв музыки.",
  "imagePrompt": "The box of wooden toys in mid-air, tumbling open, toys beginning to spill out of it against a cold pale winter sky. The camera holds on the box alone — the falling man is out of frame below and is not shown at all. No impact, no body, nothing distressing in frame."
 },
 {
  "id": "S07-5",
  "section": "Сцена 07. Падение",
  "scene": "Зимнее крыльцо",
  "title": "Игрушки по снегу",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [],
  "synopsis": "Игрушки рассыпаются по снегу. Одна птица продолжает несколько секунд двигать крыльями.",
  "audio": "Шорох дерева по льду; механизм замирает.",
  "imagePrompt": "Low shot along the snow at the foot of the steps: hand-made wooden toys scattered across the white, half-buried. One clockwork bird lies on its side still working, its wings beating slowly and uselessly against the snow, winding down. Cold blue light, absolute stillness around it."
 },
 {
  "id": "S07-6",
  "section": "Сцена 07. Падение",
  "scene": "Зимнее крыльцо",
  "title": "Треснувшее крыло подарка",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Рядом падает недоделанное деревянное крыло подарка и трескается.",
  "audio": "Треск дерева.",
  "imagePrompt": "Insert in the snow: the finished wing of the gift bird, thrown clear, lying in the ice with a clean split running the length of the grain. The broken wood is pale and raw against the dark polished surface. Nothing else in frame."
 },
 {
  "id": "S07-7",
  "section": "Сцена 07. Падение",
  "scene": "Больничная палата",
  "title": "Двигается только один палец",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Айлин подбегает к кровати. Арман пытается сжать её пальцы, но двигается только один палец.",
  "audio": "Приглушённый больничный фон; без музыки.",
  "imagePrompt": "Calm pale hospital room, cool even light. Close on two hands resting on a white blanket: ARMAN's hand lies open, and adult AILIN's hand is folded around it. He tries to close his fingers on hers and only one finger moves, a small twitch against her palm. Her other hand comes up to press his hand against her cheek. Faces soft-focus behind the hands."
 },
 {
  "id": "S08-1",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Реабилитационный кабинет",
  "title": "Лёгкий деревянный цилиндр",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Специалист кладёт перед Арманом лёгкий деревянный цилиндр.",
  "audio": "Нейтральный кабинетный фон.",
  "imagePrompt": "A plain rehabilitation room in cool grey-blue light. ARMAN, older and thinner, sits at a table in a supportive chair. A therapist — a small woman with tied-back hair, a clearly different face — sets a light wooden cylinder on the table in front of him and withdraws her hands."
 },
 {
  "id": "S08-2",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Реабилитационный кабинет",
  "title": "Цилиндр падает",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Он поднимает кисть, но пальцы не удерживают предмет; цилиндр падает на стол.",
  "audio": "Сухой стук дерева.",
  "imagePrompt": "Close-up on the table: ARMAN's hand rises and closes around the wooden cylinder — the fingers make the shape but not the force, the cylinder slides straight through them and drops onto the table with a dry knock and rolls. The hand stays open where it was. These are unmistakably a craftsman's hands."
 },
 {
  "id": "S08-3",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Реабилитационный кабинет",
  "title": "Дочь смотрит через стекло",
  "shotType": "medium",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Композиция-рифма: Айлин наблюдает так же, как отец когда-то наблюдал за ней на площадке.",
  "audio": "Тишина, далёкие шаги.",
  "imagePrompt": "Through the glass panel of the door, framed exactly like the playground shot of her father: adult AILIN stands watching. While he can see her she is smiling, easy and encouraging. Reflections of the corridor drift across the glass between us and her."
 },
 {
  "id": "S08-4",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Реабилитационный кабинет",
  "title": "Лицо дрогнуло",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Затем она отворачивается и позволяет лицу дрогнуть.",
  "audio": "Далёкие шаги.",
  "imagePrompt": "Close-up: AILIN has turned her back to the glass, out of his sight, and the smile is gone. Her chin goes tight, she presses two fingers hard against her closed eyes for a second, and breathes. Cold corridor light."
 },
 {
  "id": "S08-5",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Дом: автоматика",
  "title": "Датчик открывает дверь",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [],
  "synopsis": "Датчик открывает дверь.",
  "audio": "Мягкие сервоприводы, холодные сигналы.",
  "imagePrompt": "Insert: a discreet white sensor blinks and an interior door swings itself smoothly open onto an empty grey-lit hallway. Nobody touched it, nobody is in frame. Perfectly efficient and slightly cold."
 },
 {
  "id": "S08-6",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Дом: автоматика",
  "title": "Рука робота подаёт предметы",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Роботизированная рука подаёт предметы, автоматическая ложка движется сама. Всё точно, но Арман почти не участвует.",
  "audio": "Сервоприводы.",
  "imagePrompt": "The apartment, now equipped: a clean articulated assistive arm on a rail hands objects to ARMAN, who sits in a compact powered chair and simply receives them. His own hands rest in his lap. Everything works flawlessly and he is doing none of it. Cold grey-blue palette, symmetrical static composition."
 },
 {
  "id": "S08-7",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Дом: автоматика",
  "title": "Старая кружка с птицей",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Робот подносит Арману неровную кружку, которую Айлин сделала ребёнком; на ней нарисована птица.",
  "audio": "Керамика тихо звякает о захват.",
  "imagePrompt": "Insert: a lopsided hand-made child's ceramic mug, glaze uneven, a wobbly bird painted on its side, held in the neat padded gripper of the robotic arm. The warmth of the object against the machine holding it is the whole shot."
 },
 {
  "id": "S08-8",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Дом: автоматика",
  "title": "Машина завершает действие за него",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Он пытается сам обхватить ручку, пальцы соскальзывают, и машина завершает действие вместо него. Арман отворачивает голову.",
  "audio": "Керамика о захват.",
  "imagePrompt": "Close-up: ARMAN reaches for the mug's handle himself; his fingers close and slide off it. Without pausing, the machine completes the movement and brings the mug to his lips for him. He drinks — and turns his head away from the arm afterwards, jaw set, eyes down."
 },
 {
  "id": "S08-9",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Тёмная мастерская",
  "title": "Автоматика включает свет",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Арман въезжает к верстаку; автоматика включает свет.",
  "audio": "Щелчок реле.",
  "imagePrompt": "The familiar wide framing of the workshop, now cold and still. ARMAN rolls in in his compact chair and the automatic light snaps on by itself — flat, even, joyless, nothing like the warm morning sun of the opening. Dust lies on the bench. The wall lever with the little bird is still there."
 },
 {
  "id": "S08-10",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Тёмная мастерская",
  "title": "Резец падает",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Он пытается взять резец, но тот падает. Наклониться за ним он не может.",
  "audio": "Резец ударяется о пол.",
  "imagePrompt": "Close-up at bench height: ARMAN's hand reaches for a chisel, the handle rolls out of his grasp, and the tool drops off the edge of the bench to the floor. His hand stays where it was, open. He looks down at it on the floor, far out of reach."
 },
 {
  "id": "S08-11",
  "section": "Сцена 08. Мастер без рук",
  "scene": "Тёмная мастерская",
  "title": "Он выключает свет и уезжает",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Отец выключает свет и уезжает, оставляя недоделанную птицу в полосе света из коридора.",
  "audio": "Затем тишина.",
  "imagePrompt": "The workshop goes dark. ARMAN's chair is a silhouette leaving through the doorway. A single stripe of light from the hallway falls across the bench and lands exactly on the unfinished mechanical bird under its cloth, one gear catching the light. Everything else is black."
 },
 {
  "id": "S09-1",
  "section": "Сцена 09. Мастерская замолкает",
  "scene": "Замолкшая мастерская",
  "title": "Пыль на инструментах",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Дни сменяются светом и тенью; на инструментах появляется пыль.",
  "audio": "Едва слышный городской фон.",
  "imagePrompt": "Fixed insert on the workbench: bars of light and shadow lie across the tools, and a soft even film of dust has settled on the chisels, the files and the unswept curls of shaving. Nothing has been moved by anyone for a long time."
 },
 {
  "id": "S09-2",
  "section": "Сцена 09. Мастерская замолкает",
  "scene": "Замолкшая мастерская",
  "title": "Коробки больше не забирают",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Готовые коробки больше не забирают; на дверной ручке висит детский рисунок, оставленный посетителем.",
  "audio": "Городской фон.",
  "imagePrompt": "Wide shot of the dim workshop: a stack of finished, taped-up order boxes stands by the door exactly where it was left, untouched. Hooked over the door handle hangs a child's crayon drawing of a bird, left by a visitor who found nobody home."
 },
 {
  "id": "S09-3",
  "section": "Сцена 09. Мастерская замолкает",
  "scene": "Замолкшая мастерская",
  "title": "Дети во дворе с его игрушками",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Арман смотрит, как во дворе дети играют его старыми игрушками.",
  "audio": "Далёкий смех за стеклом.",
  "imagePrompt": "ARMAN at the window in his chair, seen from inside the dim room, the bright courtyard beyond the glass. Down below, children are playing with his old wooden toys. His face is lit by the window; his eyes follow the movement of their hands."
 },
 {
  "id": "S09-4",
  "section": "Сцена 09. Мастерская замолкает",
  "scene": "Замолкшая мастерская",
  "title": "Взгляд опускается на собственные ладони",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Его взгляд следует за движениями их рук, затем опускается на собственные ладони.",
  "audio": "Далёкий смех.",
  "imagePrompt": "Close-up: ARMAN's gaze drops from the window to his own hands lying still and open in his lap. The hands are unmistakably a maker's — broad, scarred, capable-looking — and completely at rest. No self-pity in the face; something more like distance."
 },
 {
  "id": "S09-5",
  "section": "Сцена 09. Мастерская замолкает",
  "scene": "Замолкшая мастерская",
  "title": "Айлин находит птицу и сломанное крыло",
  "shotType": "medium",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Айлин входит, замечает недоделанную птицу и сломанное крыло.",
  "audio": "Пыльный шорох ткани.",
  "imagePrompt": "Adult AILIN, still in her coat, draws the dusty cloth off the bench. Underneath: the unfinished mechanical bird, and beside it the split wing, brought home from the snow and kept. Dust rises through a shaft of light. She goes very still."
 },
 {
  "id": "S09-6",
  "section": "Сцена 09. Мастерская замолкает",
  "scene": "Замолкшая мастерская",
  "title": "Приспособления на столе",
  "shotType": "insert",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Рядом лежат первый рычаг выключателя, большая насадка на ключ и тканевая петля. Она раскладывает предметы на столе.",
  "audio": "Начинается напряжённый музыкальный слой.",
  "imagePrompt": "Overhead insert: AILIN's hands lay out four objects on the clean wood in a deliberate row — the first long wall lever with its small carved bird, the oversized wooden winding knob, the broad soft fabric loop, and the turned pivot stand. A childhood of solved problems, arranged like evidence."
 },
 {
  "id": "S10-1",
  "section": "Сцена 10. Первое неверное решение",
  "scene": "Университетская лаборатория ночью",
  "title": "Айлин у промышленной руки",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Университетская лаборатория ночью: Айлин работает у промышленной роботизированной руки.",
  "audio": "Вентиляция, тихие цифровые сигналы.",
  "imagePrompt": "Wide night shot of a university robotics lab — dark, cool, lit by monitor glow and one overhead task lamp. Adult AILIN works at a large industrial robotic arm on a steel bench, cables coiled, the room otherwise empty. Cold palette with a single warm lamp."
 },
 {
  "id": "S10-2",
  "section": "Сцена 10. Первое неверное решение",
  "scene": "Университетская лаборатория ночью",
  "title": "Знакомая деревянная опора",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "После долгой настройки её кисть дрожит; она ставит под предплечье знакомую деревянную опору и продолжает.",
  "audio": "Тихие сигналы.",
  "imagePrompt": "Close-up: AILIN's hand trembling above a keyboard after hours of work. She reaches into her bag and sets the same warm shaped wooden forearm rest her father made her — worn smooth with years — onto the cold steel bench, settles her arm into it, and carries on. The wood against the steel is the point of the shot."
 },
 {
  "id": "S10-3",
  "section": "Сцена 10. Первое неверное решение",
  "scene": "Университетская лаборатория ночью",
  "title": "Машина вырезает сама",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Машина сама берёт заготовку, вырезает детали и за несколько секунд создаёт безупречную деревянную птицу.",
  "audio": "Быстрый чистый звук фрезы.",
  "imagePrompt": "Insert on the robot arm working alone: it picks up a wooden blank, spins it, and a cutter shapes it in fast confident passes, shavings flying in a neat arc under the lamp. Flawless, effortless, and entirely without a human hand in frame."
 },
 {
  "id": "S10-4",
  "section": "Сцена 10. Первое неверное решение",
  "scene": "Университетская лаборатория ночью",
  "title": "Безупречная птица",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Айлин смотрит на результат с надеждой.",
  "audio": "Фреза затихает.",
  "imagePrompt": "A perfect machine-made wooden bird stands on the steel bench, geometrically flawless, every surface identical. AILIN picks it up and turns it in the lamplight, and her face fills with hope — she believes she has found the answer."
 },
 {
  "id": "S10-5",
  "section": "Сцена 10. Первое неверное решение",
  "scene": "Мастерская: демонстрация робота",
  "title": "Робот повторяет демонстрацию",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Робот повторяет демонстрацию перед Арманом.",
  "audio": "Сервоприводы.",
  "imagePrompt": "In the dim workshop, the assistive robot arm has been set up on the old workbench and repeats its demonstration, carving a perfect bird among ARMAN's dusty hand tools. ARMAN watches from his chair. AILIN stands behind him with her hands on the chair back, hopeful. The machine is clean and benign — never sinister."
 },
 {
  "id": "S10-6",
  "section": "Сцена 10. Первое неверное решение",
  "scene": "Мастерская: демонстрация робота",
  "title": "Он пододвигает свою птицу",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Он рассматривает идеальную игрушку, затем медленно пододвигает к себе старую незавершённую птицу и кладёт слабую ладонь рядом с резцом.",
  "audio": "Сервоприводы затихают.",
  "imagePrompt": "Close-up on the bench: the machine's flawless bird stands on one side. ARMAN slowly pushes it aside with the back of his knuckles and draws his own unfinished bird towards himself instead, then lays his weak open hand on the wood beside a chisel. He is not asking for the object. He is asking for the work."
 },
 {
  "id": "S10-7",
  "section": "Сцена 10. Первое неверное решение",
  "scene": "Мастерская: демонстрация робота",
  "title": "Она отключает автономный режим",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Айлин понимает просьбу и отключает автономный режим.",
  "audio": "Кнопка выключения; остаётся живой звук мастерской.",
  "imagePrompt": "Close on AILIN's face as she understands — the hope going out and something harder and better replacing it. Her hand comes into frame and presses a single switch; the servo whine dies out of the room, leaving only the workshop. She turns to look at the old adaptations laid out on the table."
 },
 {
  "id": "S11-1",
  "section": "Сцена 11. Главный принцип",
  "scene": "Стол Айлин: разбор приспособлений",
  "title": "Всё вокруг её ладони",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Вид сверху: Айлин раскладывает вокруг своей ладони рычаг, насадку, петлю, подставку и детали старой игрушки.",
  "audio": "Тихое перемещение дерева по столу.",
  "imagePrompt": "Straight overhead shot: AILIN's own open hand lies flat at the centre of the table, and arranged in a ring around it are the wall lever with its bird, the oversized winding knob, the fabric loop, the pivot stand and the disassembled parts of an old toy. Her hand is the centre of the diagram — the design starts from the body, not from the machine."
 },
 {
  "id": "S11-2",
  "section": "Сцена 11. Главный принцип",
  "scene": "Стол Айлин: разбор приспособлений",
  "title": "Рычаг становится системой тросов",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Графический монтаж: длинный рычаг превращается в систему тросов.",
  "audio": "Инженерный ритм музыки.",
  "imagePrompt": "Graphic transformation insert: the long wooden wall lever lies on drafting paper and, drawn over it in fine pencil lines that seem to grow out of the object itself, becomes a slim routed cable running along a forearm. Object and drawing occupy the same space in one continuous frame. No text or numbers on the paper."
 },
 {
  "id": "S11-3",
  "section": "Сцена 11. Главный принцип",
  "scene": "Стол Айлин: разбор приспособлений",
  "title": "Петля становится фиксатором кисти",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [],
  "synopsis": "Петля превращается в мягкий фиксатор кисти.",
  "audio": "Карандаш.",
  "imagePrompt": "Graphic transformation insert: the broad soft fabric loop lies on the paper and pencil lines extend it into a soft padded wrist cradle with a single strap — the same woven fabric, the same warmth, one step more engineered."
 },
 {
  "id": "S11-4",
  "section": "Сцена 11. Главный принцип",
  "scene": "Стол Айлин: разбор приспособлений",
  "title": "Подставка становится платформой",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [],
  "synopsis": "Поворотная подставка превращается в рабочую платформу; лёгкая пружина — в механизм дозированной поддержки.",
  "audio": "Щелчки деталей.",
  "imagePrompt": "Graphic transformation insert: the turned wooden pivot stand on the paper grows in pencil into a height-adjustable work platform; beside it the toy's fine spring is drawn out into a small measured assist mechanism, coil by coil."
 },
 {
  "id": "S11-5",
  "section": "Сцена 11. Главный принцип",
  "scene": "Стол Айлин: разбор приспособлений",
  "title": "Схема мягкого экзоскелета",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Айлин рисует не роботизированную руку, а лёгкий мягкий экзоскелет: поддержка плеча, тросы вдоль предплечья, сенсоры, стабилизатор запястья.",
  "audio": "Карандаш.",
  "imagePrompt": "Close on the drawing itself: a light soft exoskeleton drafted in pencil — a shoulder yoke, slim cables running along the forearm, small sensor pads over the muscle, a wrist stabiliser — and crucially the fingers left completely free and open. Beside it, an adaptive workbench. It is drawn like furniture, not like a prosthesis. No text or labels anywhere on the drawing."
 },
 {
  "id": "S11-6",
  "section": "Сцена 11. Главный принцип",
  "scene": "Стол Айлин: разбор приспособлений",
  "title": "Ткань, дерево и тонкий металл",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Монтаж сборки: ткань, дерево и тонкий металл соединяются в прототип.",
  "audio": "Ритм швейной машины, отвёртки и пайки.",
  "imagePrompt": "Assembly insert: AILIN's hands stitching a padded fabric strap on a machine, then seating it into a shaped wooden shoulder piece, then threading a fine steel cable through a brass eyelet. Cloth, wood and thin metal, in that order — the device visibly inherits the home workshop rather than a laboratory."
 },
 {
  "id": "S11-7",
  "section": "Сцена 11. Главный принцип",
  "scene": "Стол Айлин: разбор приспособлений",
  "title": "Первый прототип на столе",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Прототип внешне наследует домашние приспособления отца, а не выглядит медицинским аппаратом.",
  "audio": "Отвёртка.",
  "imagePrompt": "The first finished prototype lying on the workbench under warm light: a soft exoskeleton of canvas webbing, warm shaped wood and slim brushed-steel cable runs, with open finger space. It sits among ARMAN's old hand tools and looks like it belongs there. Nothing white, nothing clinical, nothing plastic."
 },
 {
  "id": "S12-1",
  "section": "Сцена 12. Прототипы",
  "scene": "Мастерская: прототипы",
  "title": "Первый тест тянет плечи назад",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Тяжёлая конструкция поднимает руки Армана, но тянет плечи назад и лишает его контроля.",
  "audio": "Металл натянуто скрипит.",
  "imagePrompt": "Wide shot in the workshop: a first, visibly too heavy rig is strapped to ARMAN. It does lift his arms — but it hauls his shoulders backwards against the chair back and his chin up. His face says clearly that he is no longer driving this. AILIN's hands are already on the release buckles."
 },
 {
  "id": "S12-2",
  "section": "Сцена 12. Прототипы",
  "scene": "Мастерская: прототипы",
  "title": "Она сразу снимает систему",
  "shotType": "medium",
  "runtime": "3s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Айлин немедленно останавливает тест и снимает систему.",
  "audio": "Щелчки застёжек.",
  "imagePrompt": "AILIN stops the test instantly — no hesitation, no let's-just-try-once-more — and lifts the heavy rig off her father's shoulders, setting it aside on the bench with a thump. She crouches to his eye level, checking his face, one hand on his forearm."
 },
 {
  "id": "S12-3",
  "section": "Сцена 12. Прототипы",
  "scene": "Мастерская: прототипы",
  "title": "Карандаш ломается",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Более лёгкий прототип усиливает движение слишком резко: карандаш проводит длинную линию и ломается.",
  "audio": "Резкий хруст графита.",
  "imagePrompt": "Close-up on paper: ARMAN's hand, in the lighter prototype, starts a short careful stroke — the assist over-fires, the pencil rips a long uncontrolled line across the sheet and the graphite snaps. His hand jerks back."
 },
 {
  "id": "S12-4",
  "section": "Сцена 12. Прототипы",
  "scene": "Мастерская: прототипы",
  "title": "Она уменьшает усиление",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Отец вздрагивает; Айлин уменьшает усиление.",
  "audio": "Щелчок регулятора.",
  "imagePrompt": "Insert: AILIN's fingers turning a small brass adjustment dial on the device a precise notch down, then a second, tinier notch. Her other hand rests reassuringly on her father's shoulder at the edge of frame."
 },
 {
  "id": "S12-5",
  "section": "Сцена 12. Прототипы",
  "scene": "Мастерская: прототипы",
  "title": "Сенсоры читают намерение",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Тонкие датчики считывают едва заметное мышечное намерение.",
  "audio": "Тихий нарастающий тон.",
  "imagePrompt": "Macro insert: two slim soft sensor pads resting on the skin of a forearm, and beneath them the faintest movement of muscle — barely a flicker. Warm light, shallow focus, the skin and the fabric both tactile."
 },
 {
  "id": "S12-6",
  "section": "Сцена 12. Прототипы",
  "scene": "Мастерская: прототипы",
  "title": "Неровный сигнал становится плавной линией",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Неровный сигнал превращается в плавную траекторию, но направление задаёт Арман. Механический тестовый палец повторяет движение.",
  "audio": "Нарастающий тон.",
  "imagePrompt": "Insert on a small screen and a test rig side by side: a jagged trembling signal trace resolves into one smooth curve, and beside it a single mechanical test finger slowly repeats a human movement. Only abstract curves and shapes on the screen — no text, no numbers, no interface labels."
 },
 {
  "id": "S12-7",
  "section": "Сцена 12. Прототипы",
  "scene": "Мастерская: прототипы",
  "title": "Он показывает на стул и воду",
  "shotType": "medium",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Рука Айлин начинает дрожать; Арман слабым движением указывает на стул и кружку воды. Они обмениваются усталой улыбкой.",
  "audio": "Музыка теплеет; спокойный вдох.",
  "imagePrompt": "Late in the workshop, warm lamp, both of them tired. AILIN's hand shakes on the tool; she tries to keep going. ARMAN lifts his weak hand just enough to point — first at the chair, then at the mug of water. She stops, sits down, and they look at each other and both smile, worn out. Now he is the one taking care of her."
 },
 {
  "id": "S13-1",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Айлин открывает шторы",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Айлин открывает шторы; утренний свет входит в очищенную мастерскую.",
  "audio": "Комната оживает.",
  "imagePrompt": "The familiar wide framing of the workshop, transformed: AILIN pulls the curtains wide and morning sun floods in, warm and gold, exactly like the opening of the film. The dust is gone, the tools are clean and hung, the shelves of wooden birds are back. The room is warm again for the first time since the fall."
 },
 {
  "id": "S13-2",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Новый адаптивный верстак",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Новый верстак меняет высоту, удерживает заготовку и подаёт инструмент, но не имеет автономного режущего блока.",
  "audio": "Негромкие механизмы.",
  "imagePrompt": "The new adaptive workbench: a warm timber surface that rises and tilts on slim mechanisms, a padded clamp holding a wooden blank steady, and a simple arm that presents a tool handle-first within reach. There is deliberately no cutting head and no autonomous tool — nothing that could do the work by itself. Wood and brushed steel, warm and handsome."
 },
 {
  "id": "S13-3",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Она надевает экзоскелет",
  "shotType": "medium",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Она надевает на Армана мягкий экзоскелет: поддерживает плечи, фиксирует предплечья, размещает сенсоры и оставляет пальцы открытыми.",
  "audio": "Мягкие застёжки, короткий запуск системы.",
  "imagePrompt": "AILIN fits the soft exoskeleton onto her father: canvas yoke over the shoulders, forearm cradles closed with soft buckles, sensor pads smoothed onto the skin — and his fingers left entirely bare and free. She works quickly and matter-of-factly, the way you help someone into a coat."
 },
 {
  "id": "S13-4",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Он смотрит на свои руки, а не на машину",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Отец смотрит на собственные руки, а не на машину.",
  "audio": "Короткий запуск системы.",
  "imagePrompt": "Close-up on ARMAN looking down — past the device entirely — at his own bare hands where they rest in the cradles. The exoskeleton is soft and quiet around his arms and barely reads as technology. His attention is completely on his hands."
 },
 {
  "id": "S13-5",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Верстак подаёт резец",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Верстак подаёт резец близко; Арман сам обхватывает рукоятку.",
  "audio": "Тихий механизм.",
  "imagePrompt": "Insert: the bench arm brings a chisel forward, handle-first, and stops. It waits. ARMAN's own hand closes around the wooden handle — his fingers, his grip, taking possession of the tool."
 },
 {
  "id": "S13-6",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Устройство ждёт его движения",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Устройство принимает вес руки, но не двигается, пока он не начинает движение.",
  "audio": "Его дыхание и едва заметный сервопривод.",
  "imagePrompt": "Close on the forearm in the cradle: the device visibly carries the weight of the arm, the cables slack and still. Nothing moves. Everything is waiting. Then the smallest intention appears in the muscle and the cables take up tension — after him, never before him."
 },
 {
  "id": "S13-7",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Первая ровная линия",
  "shotType": "insert",
  "runtime": "5s",
  "refs": [],
  "synopsis": "Рука дрожит; система сглаживает дрожание, сохраняя направление. Резец оставляет первую короткую ровную линию.",
  "audio": "Все звуки исчезают, затем возвращается тёплая музыка.",
  "imagePrompt": "Extreme close-up on the wood: the chisel edge touches the surface, trembles for an instant, steadies, and cuts one short clean straight line, lifting a single perfect curl of shaving. The line is small and slightly imperfect and completely his."
 },
 {
  "id": "S13-8",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Он проводит пальцем по следу",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Арман проводит пальцем по следу и плачет, улыбаясь.",
  "audio": "Возвращается тёплая тема.",
  "imagePrompt": "Close-up: ARMAN runs one fingertip slowly along the cut he has just made, feeling it. Then his face — he is crying and smiling at the same time, entirely without noise, tears running while the smile widens. The warmest light in the film so far."
 },
 {
  "id": "S13-9",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Монтаж работы",
  "shotType": "insert",
  "runtime": "5s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Он шлифует, вставляет шестерню, держит кисточку и наносит масло.",
  "audio": "Ритм ручной работы.",
  "imagePrompt": "Working montage insert on ARMAN's hands: sanding a curve smooth, seating a small brass gear with a fingertip, holding a brush and drawing oil along the grain until the wood darkens and glows. The device is present in every shot but never the subject of any of them."
 },
 {
  "id": "S13-10",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Каждая остановка — его решение",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Если движение ослабевает, устройство поддерживает его, но каждая остановка происходит по его решению.",
  "audio": "Ритм работы.",
  "imagePrompt": "Medium on ARMAN at the bench: he pauses mid-stroke, holds the position while the device quietly bears the arm's weight, considers the piece, and then chooses to go on. The pause is his, not the machine's."
 },
 {
  "id": "S13-11",
  "section": "Сцена 13. Первая линия",
  "scene": "Обновлённая мастерская",
  "title": "Он сам поднимает кружку",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-ARMAN55",
   "CH-AILIN23"
  ],
  "synopsis": "Арман сам обхватывает старую кружку с птицей и медленно поднимает её. Айлин видит это из дверного проёма, замирает, но не подходит помогать.",
  "audio": "Керамика мягко касается стола.",
  "imagePrompt": "ARMAN's own hand closes around the handle of the lopsided child-made mug with the painted bird and lifts it, slowly and steadily, all the way to his mouth. In the soft background, framed in the doorway, AILIN has stopped mid-step — one hand on the frame, deliberately not coming in to help. He drinks and sets the mug back down on the wood himself."
 },
 {
  "id": "S14-1",
  "section": "Сцена 14. Подарок",
  "scene": "Дом вечером: коробка",
  "title": "Коробка со знаком птицы",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Айлин возвращается и видит на столе коробку с вырезанным знаком птицы. Из мастерской доносится звук работы.",
  "audio": "Тихая домашняя атмосфера.",
  "imagePrompt": "Evening interior, lamps on, warm and quiet. AILIN comes in still holding her keys and stops: on the table sits a wooden box with a bird mark carved into its lid. Through the open workshop door behind her comes warm light and the small sound of someone working."
 },
 {
  "id": "S14-2",
  "section": "Сцена 14. Подарок",
  "scene": "Дом вечером: коробка",
  "title": "Законченная механическая птица",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [],
  "synopsis": "Внутри законченная механическая птица: одно крыло из старых деталей, второе завершено после травмы — точнее, но с тем же рисунком резца.",
  "audio": "Тонкий скрип шарнира.",
  "imagePrompt": "Close-up into the opened box: the mechanical wooden bird, finished at last. One wing is visibly older — its wood darker, its carving a shade freer, one repaired split still faintly visible. The other wing is newer and a little more precise, but cut with exactly the same tool pattern. Two hands, one bird."
 },
 {
  "id": "S14-3",
  "section": "Сцена 14. Подарок",
  "scene": "Дом вечером: коробка",
  "title": "Она поворачивает ключ",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Айлин поворачивает ключ.",
  "audio": "Механический перезвон.",
  "imagePrompt": "Close-up: adult AILIN's fingers turning the bird's winding key — a generous, comfortable, easy-grip key, made that way on purpose, for her. She turns it slowly, listening to the mechanism take up."
 },
 {
  "id": "S14-4",
  "section": "Сцена 14. Подарок",
  "scene": "Дом вечером: коробка",
  "title": "Крылья раскрываются",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Птица расправляет крылья и делает одно мягкое движение вперёд.",
  "audio": "Тёплый аккорд.",
  "imagePrompt": "Insert: the wooden bird opens both wings wide — the old one and the new one together — and makes a single soft forward movement across the table, brass linkage turning at its flank. Lamplight along the grain of both wings."
 },
 {
  "id": "S14-5",
  "section": "Сцена 14. Подарок",
  "scene": "Дом вечером: коробка",
  "title": "Она прижимает игрушку к груди",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23"
  ],
  "synopsis": "Она прижимает игрушку к груди.",
  "audio": "Тёплый аккорд.",
  "imagePrompt": "AILIN gathers the bird up against her chest with both arms and holds it there, eyes closed, exactly the way a six-year-old holds a toy. The adult and the child are the same person in this shot."
 },
 {
  "id": "S14-6",
  "section": "Сцена 14. Подарок",
  "scene": "Мастерская: новая игрушка",
  "title": "Обычный детский заказ",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Арман уже начал новую игрушку — не демонстрацию технологии, а обычный детский заказ.",
  "audio": "Спокойный звук резца.",
  "imagePrompt": "ARMAN at the bench in the warm lamplight, already well into a new toy — an ordinary, cheerful wooden animal for somebody's child. He is working calmly, absorbed. The exoskeleton on his arms is unremarkable now, as much a part of the room as his apron."
 },
 {
  "id": "S14-7",
  "section": "Сцена 14. Подарок",
  "scene": "Мастерская: новая игрушка",
  "title": "Детский эскиз на верстаке",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [],
  "synopsis": "На верстаке лежит эскиз ребёнка.",
  "audio": "Резец.",
  "imagePrompt": "Insert: a child's crayon drawing weighted down on the workbench with a chisel — a wobbly, joyful animal drawn by a small hand, being followed faithfully in wood beside it. No writing on the paper."
 },
 {
  "id": "S14-8",
  "section": "Сцена 14. Подарок",
  "scene": "Мастерская: новая игрушка",
  "title": "Объятие",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Дочь обнимает отца; при поддержке устройства он медленно поднимает руку и кладёт ладонь ей на спину.",
  "audio": "Музыка достигает вершины без пафоса.",
  "imagePrompt": "Close on the embrace from behind ARMAN's shoulder: AILIN has her arms around her father. Slowly, with the device taking the weight, his hand rises and comes to rest flat between her shoulder blades."
 },
 {
  "id": "S14-9",
  "section": "Сцена 14. Подарок",
  "scene": "Мастерская: новая игрушка",
  "title": "Ладонь на спине",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "В кадре остаются его пальцы, ткань экзоскелета и деревянная птица между ними.",
  "audio": "Музыкальная вершина.",
  "imagePrompt": "Tight insert: a father's fingers resting on the back of his daughter's shirt, the soft canvas strap of the exoskeleton across his forearm, and the wooden bird's wing pressed between them. Warm lamplight, extremely shallow focus. No faces."
 },
 {
  "id": "S15-1",
  "section": "Сцена 15. Площадка для всех",
  "scene": "Площадка будущего",
  "title": "Та же площадка, ближайшее будущее",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Айлин идёт рядом с Арманом в компактном кресле. Площадка узнаваема по дереву и старой песочнице, но дорожки плавные, элементы доступны с разных высот.",
  "audio": "Смех детей, открытая светлая музыка.",
  "imagePrompt": "Wide shot of the same playground years later, in bright open daylight. The timber and the old sandpit are recognisably the same, but the paths now flow in smooth wide curves, the climbing structure offers handholds and platforms at many heights, and everything is beautiful and playful rather than clinical. AILIN walks beside ARMAN, who moves in a compact, well-designed powered chair."
 },
 {
  "id": "S15-2",
  "section": "Сцена 15. Площадка для всех",
  "scene": "Площадка будущего",
  "title": "Ребёнок в коляске заезжает наверх",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Ребёнок в коляске заезжает на общую конструкцию.",
  "audio": "Живые игровые звуки.",
  "imagePrompt": "A child in a small wheelchair rolls straight up a gently curving timber ramp onto the main play structure, where two other children are already playing, and joins them without any transition or fuss. It is simply the way up."
 },
 {
  "id": "S15-3",
  "section": "Сцена 15. Площадка для всех",
  "scene": "Площадка будущего",
  "title": "Лёгкий рычаг, удобная панель",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Девочка со слабостью рук двигает лёгкий рычаг; ребёнок небольшого роста пользуется панелью на удобной высоте.",
  "audio": "Игровые звуки.",
  "imagePrompt": "Two moments in one frame: a girl moves a long light wooden lever with the flat of her forearm, and beside her a very small child works a play panel set low enough to reach. Other children use the identical elements in completely ordinary ways. Nothing is marked out as special equipment."
 },
 {
  "id": "S15-4",
  "section": "Сцена 15. Площадка для всех",
  "scene": "Площадка будущего",
  "title": "Дети собирают большую птицу",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [],
  "synopsis": "На месте, где Айлин когда-то сидела одна, дети вместе собирают большую механическую птицу.",
  "audio": "Щелчок механизма и общий смех.",
  "imagePrompt": "Camera at children's height at the sandpit — the exact place where AILIN once sat alone. Now five children of visibly different ages, sizes and abilities are building a large wooden mechanical bird together out of oversized parts, heads down over the work, all completely absorbed."
 },
 {
  "id": "S15-5",
  "section": "Сцена 15. Площадка для всех",
  "scene": "Площадка будущего",
  "title": "Он пододвигает рычаг, а не делает за него",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [],
  "synopsis": "Один ребёнок не может повернуть деталь; другой не делает это за него, а пододвигает длинный удобный рычаг.",
  "audio": "Щелчок механизма.",
  "imagePrompt": "Close on small hands: one child struggles to turn a stiff wooden part and can't. A second child does not take it from him — instead slides a long comfortable lever across the sand and fits it onto the part, then sits back on his heels. The first child turns it himself and the mechanism clicks home. The father's principle, learned by children."
 },
 {
  "id": "S15-6",
  "section": "Сцена 15. Площадка для всех",
  "scene": "Площадка будущего",
  "title": "Общий смех",
  "shotType": "reaction",
  "runtime": "3s",
  "refs": [],
  "synopsis": "Дети смеются вместе.",
  "audio": "Общий смех.",
  "imagePrompt": "Reaction shot of the group of children around the finished bird bursting into laughter and delight together as its wings sweep open. Every face is different; not one of them is framed as a category."
 },
 {
  "id": "S15-7",
  "section": "Сцена 15. Площадка для всех",
  "scene": "Площадка будущего",
  "title": "Её ладонь поверх его руки",
  "shotType": "close-up",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Арман смотрит на Айлин. Она кладёт ладонь поверх его руки.",
  "audio": "Музыка переходит в титры.",
  "imagePrompt": "Close two-shot: ARMAN turns from watching the children to look at his daughter, and AILIN lays her hand over his where it rests on the arm of the chair. Neither of them says anything. Warm afternoon light."
 },
 {
  "id": "S15-8",
  "section": "Сцена 15. Площадка для всех",
  "scene": "Площадка будущего",
  "title": "Камера поднимается над площадкой",
  "shotType": "wide",
  "runtime": "6s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Они продолжают путь через площадку, камера поднимается, показывая единое пространство без отдельных зон.",
  "audio": "Музыка в титры.",
  "imagePrompt": "High wide shot looking down over the playground as AILIN and ARMAN continue along the curving path together, small in the frame. From above, the whole space reads as one continuous flowing design with children moving freely everywhere across it — no separate zone, no fenced-off area, no special corner."
 },
 {
  "id": "S16-1",
  "section": "Эпилог",
  "scene": "Домашние тестовые видео",
  "title": "Снимают лишнюю деталь",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Арман и Айлин дорабатывают устройство: снимают лишнюю деталь, меняют ремень.",
  "audio": "Реальные рабочие звуки; музыка легче.",
  "imagePrompt": "Loose, casual, home-video-feeling shot of the workshop: AILIN unscrews a component off the exoskeleton and drops it on the bench with a shrug, ARMAN watching and clearly making a joke about it. A slightly imperfect, unposed, warm moment."
 },
 {
  "id": "S16-2",
  "section": "Эпилог",
  "scene": "Домашние тестовые видео",
  "title": "Несовершенный дубль и смех",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-AILIN23",
   "CH-ARMAN55"
  ],
  "synopsis": "Проверяют подъём кружки и работу резцом; несовершенные дубли и смех показывают живой процесс.",
  "audio": "Смех.",
  "imagePrompt": "The mug test again, informally: ARMAN lifts the old bird mug, it wobbles, some water goes over the rim onto the bench, and both of them laugh out loud. Nobody rushes to wipe it up."
 },
 {
  "id": "B-16a",
  "section": "Эпилог",
  "scene": "Пользователи устройства",
  "title": "Пожилая женщина снова рисует",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Пожилая женщина снова рисует кистью.",
  "audio": "Кисть по бумаге.",
  "imagePrompt": "An elderly woman in a sunlit apartment, wearing a soft version of the exoskeleton, drawing a long confident brushstroke of watercolour across paper. Her own hand, her own line. She is entirely absorbed and pleased with herself."
 },
 {
  "id": "B-16b",
  "section": "Эпилог",
  "scene": "Пользователи устройства",
  "title": "Подросток держит смычок",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Подросток держит смычок.",
  "audio": "Одна протяжная нота.",
  "imagePrompt": "A teenage boy in a practice room, exoskeleton over his shirt sleeves, drawing a cello bow across the strings in one long steady stroke, eyes shut, listening to the note. Warm side light."
 },
 {
  "id": "B-16c",
  "section": "Эпилог",
  "scene": "Пользователи устройства",
  "title": "Мастер после травмы собирает часы",
  "shotType": "insert",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Мастер после травмы собирает часы.",
  "audio": "Крошечные детали.",
  "imagePrompt": "Macro insert: a watchmaker's hands, supported by the slim device at the forearms, setting a tiny gear into a movement with tweezers. Precise, steady, and entirely human-driven."
 },
 {
  "id": "B-16d",
  "section": "Эпилог",
  "scene": "Пользователи устройства",
  "title": "Ребёнок запускает доступную птицу",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Ребёнок запускает доступную деревянную игрушку.",
  "audio": "Деревянный перезвон.",
  "imagePrompt": "A small child in a bright room winding a wooden bird with a big comfortable key and setting it walking across the floor, then clapping. No device on this child at all — just a toy designed so that it works for everyone."
 },
 {
  "id": "S16-3",
  "section": "Эпилог",
  "scene": "Рост мастерской",
  "title": "Комната становится студией",
  "shotType": "wide",
  "runtime": "4s",
  "refs": [],
  "synopsis": "Домашняя комната постепенно превращается в небольшую студию инклюзивного дизайна. На стене остаётся первый рычаг выключателя.",
  "audio": "Уверенный, но не рекламный подъём.",
  "imagePrompt": "The workshop grown into a small studio: two more benches, a couple of young makers working, drawings covering the wall, boxes stacked for shipping — and still absolutely unmistakably the same warm wooden room. Mounted on the wall, untouched and slightly worn, is the very first switch lever with its small carved bird."
 },
 {
  "id": "S16-4",
  "section": "Эпилог",
  "scene": "Рост мастерской",
  "title": "Знак птицы на серийных коробках",
  "shotType": "insert",
  "runtime": "3s",
  "refs": [],
  "synopsis": "Серийные коробки получают маленький знак птицы.",
  "audio": "Лента, картон.",
  "imagePrompt": "Insert: a run of identical shipping boxes moving past, each one receiving the same small carved bird mark. A pure graphic bird silhouette only — no words, no letters, no brand name anywhere."
 },
 {
  "id": "S16-5",
  "section": "Эпилог",
  "scene": "Рост мастерской",
  "title": "Отец обучает новых мастеров",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [
   "CH-ARMAN55"
  ],
  "synopsis": "Отец обучает новых мастеров; Айлин показывает устройство врачам и инженерам.",
  "audio": "Щелчки камер.",
  "imagePrompt": "ARMAN at the bench with two young makers leaning in on either side, showing them how to hold a chisel — his hands doing the demonstrating, theirs copying. He is teaching, which is what a master does."
 },
 {
  "id": "B-16e",
  "section": "Эпилог",
  "scene": "Другой дом",
  "title": "Ребёнок запускает птицу",
  "shotType": "medium",
  "runtime": "4s",
  "refs": [],
  "synopsis": "В другом доме маленький ребёнок со слабостью рук запускает доступную птицу.",
  "audio": "Деревянный механизм.",
  "imagePrompt": "A different home, a different family, warm evening: a small child with visibly weak hands winds a wooden bird using its broad easy key and sets it walking along the floor. The child's whole face lights up. Nobody helps."
 },
 {
  "id": "B-16f",
  "section": "Эпилог",
  "scene": "Другой дом",
  "title": "Низкий серийный рычаг со знаком птицы",
  "shotType": "close-up",
  "runtime": "5s",
  "refs": [],
  "synopsis": "Ребёнок подходит к высокому выключателю; низкий серийный рычаг со знаком птицы позволяет включить свет самому.",
  "audio": "Щелчок выключателя.",
  "imagePrompt": "Close-up rhyming exactly with the film's early switch shot: a small child's hand reaches — not up to a high switch this time, but to a neat manufactured lever running down the wall to shoulder height, with the little bird mark at its end. The hand presses it down easily."
 },
 {
  "id": "B-16g",
  "section": "Эпилог",
  "scene": "Другой дом",
  "title": "Тёплое сияние до белого",
  "shotType": "wide",
  "runtime": "5s",
  "refs": [],
  "synopsis": "Тёплое сияние заполняет экран до белого. Затем — темнота.",
  "audio": "Последний тихий механический перезвон.",
  "imagePrompt": "The room floods with warm light from the lamp the child has just switched on, the glow rising and blooming until it overwhelms the frame and washes everything to pure warm white. The wooden bird is the last shape visible, walking, before the light takes it."
 }
];

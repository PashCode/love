const loveList = [
  'Ти - моя найбільша радість.',
  'Твій сміх - моя улюблена мелодія.',
  'Ти для мене світло у темряві.',
  'Твої очі - це безмежний океан краси.',
  'Кожен момент з тобою - справжнє щастя.',
  'Твій теплий обійм - моя безпека.',
  'Ти - моя муза, моє натхнення.',
  'Твій поцілунок - це солодкий екстаз.',
  'Твоя усмішка робить мій день кращим.',
  'Ти - найцінніший скарб у моєму житті.',
  'Твоя краса заворожує мене кожен раз.',
  'Ти - моя кохана, моя краща половинка.',
  'Твій голос - це мелодія, яку я хочу слухати завжди.',
  'Ти - яскрава зірка на моєму небі.',
  'Твоя ласка зігріває моє серце.',
  'Ти - втілення моїх найсміливіших мрій.',
  'Твоя любов - це моя найбільша скарбниця.',
  'Ти - вогонь, який розпалює мою душу.',
  'Твоя присутність робить світ яскравішим.',
  'Ти - моє відчуття спокою у бурі життя.',
  'Твоя тендітність - це найцінніше, що є у світі.',
  'Ти - моя фея, що робить життя казкою.',
  'Твої слова ласки - моє найбільше багатство.',
  'Ти - моє слідування за зірками.',
  'Твої дотики - це найніжніші миті в моєму житті.',
  'Ти - моє щастя, моє життя.',
  'Твоя присутність надає моєму життю значення.',
  'Ти - моє сонце в найпохмуріший день.',
  'Твої очі - це вікно в твою прекрасну душу.',
  'Ти - моє втілення кохання.',
  'Твоя увага - це найкращий подарунок.',
  'Ти - веселощі та радість у моєму житті.',
  'Твої посмішки - це моє паливо.',
  'Ти - найкраще, що сталося зі мною.',
  "Твоє ім'я - найкращий звук у світі.",
  'Ти - моя надія у будь-якому темному часі.',
  'Твоє серце - це мій дім.',
  'Ти - моя розкіш, моя ніжність.',
  'Твоя привабливість безмежна, як небо.',
  'Ти - моя справжня кохана, моя інша половинка.',
  'Твої слова - це для мене заклинання щастя.',
  'Ти - квітка у моєму саду кохання.',
  'Твої думки - це моя найкраща книга.',
  'Ти - моє втілення тепла та ніжності.',
  'Твоє кохання - це найкращий дарунок у світі.',
  'Ти - моє найвище бажання.',
  'Твоя увага - це джерело моєї радості.',
  'Ти - моя незабутня казка.',
]

const mainTitle = document.querySelector('.main-title')
const mainBtn = document.querySelector('.main-button')

const randomLoveWord = () => {
  const index = Math.floor(Math.random() * loveList.length)

  return loveList[index]
}

mainBtn.addEventListener('click', (e) => {
  return (mainTitle.textContent = randomLoveWord())
})

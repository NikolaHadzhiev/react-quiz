import type { NextPage } from 'next'
import { Header } from '../src/components/header/Header'
import { QuestionHeader } from '../src/components/questionsHeader/QuestionsHeader'
import { TimeHeader } from '../src/components/timeHeader/TimeHeader'
import { ExperienceHeader } from '../src/components/experienceHeader/ExperienceHeader'

const Home: NextPage = () => {
  return (
    <>
      <Header questionsHeader={<QuestionHeader questionsDone={1} allQuestions={50} />}
        timeHeader={<TimeHeader />}
        experienceHeader={<ExperienceHeader experience={210}/>}
      />
    </>
  )
}

export default Home

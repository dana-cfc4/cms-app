import { Card, Col, Row } from 'antd'
import { Portal } from 'react-portal'
import { useSelector } from 'react-redux'
import AddButton from '../buttons/AddButton'
import {
  useLocation
} from "react-router-dom";

const { Meta } = Card

const Gyms = () => {
  const gyms = [
    {
      id: 1,
      name: "Fitclass",
      image: "https://fitclass.ro/fitness-bucuresti/wp-content/uploads/2017/01/poza_fitclass_club_40-1030x685.jpg",
      description: 'amazing gym'
    },
    {
      id: 2,
      name: "WorldClass",
      image: "https://www.worldclass.ro/wp-content/uploads/worldclass-romania-story-homepage.jpg",
      description: 'amazing gym2'
    },
    {
      id: 3,
      name: "SanGym",
      image: "https://s.abcnews.com/images/US/Virus_Outbreak_Florida-Gyms_Open_hpEmbed_20200519-042233_3x2_992.jpg",
      description: 'amazing gym3'
    },
    {
      id: 4,
      name: "NotheGym",
      image: "https://cdn.newsapi.com.au/image/v1/99345c5efbc117b44cb93ac335ca7496?width=1280",
      description: 'amazing gym4'
    },
    {
      id: 5,
      name: "AndNother",
      image: "https://cdn.vox-cdn.com/thumbor/2Bcpu3cwfzZJ2gUnhWaiyWFS0Mw=/0x0:8238x5492/1200x800/filters:focal(3460x2087:4778x3405)/cdn.vox-cdn.com/uploads/chorus_image/image/67606043/GettyImages_1132006407.0.jpg",
      description: 'amazing gym5'
    },
    {
      id: 6,
      name: "AndNother2",
      image: "https://clarksvillenow.sagacom.com/files/2019/02/workout-gym-exercise-equipment-shutterstock.jpg",
      description: 'amazing gym6'
    },

  ]
  const location = useLocation()
  const selectIsToolbarReady = state => state.toolbar
  const { isToolbarReady } = useSelector(selectIsToolbarReady)
  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={16}>
          {gyms.map(gym =>
            <Col id={gym.id} xs={{ span: 24 }} sm={{span: 12}} lg={{ span: 8 }}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={gym.image} />}
              >
                <Meta title={gym.name} description={gym.description} />
              </Card>
            </Col>
          )}
        </Row>
      </div>
      {isToolbarReady &&
        <Portal node={document.getElementById("operationSection")}>
          <AddButton path={location.pathname} />
        </Portal>
      }
    </>)
}
export default Gyms
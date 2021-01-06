import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PageArea, Fake } from './styled';
import useApi from '../../helpers/N33dfulAPI';

import { PageContainer } from '../../components/MainComponents';

const Page = () => {
  const api = useApi();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState({});

  const formatDate = (date) => {
    let cDate = new Date(date);

    let months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    let cDay = cDate.getDate();
    let cMoths = cDate.getMonth();
    let cYear = cDate.getFullYear();

    return `${cDay} de ${months[cMoths]} de ${cYear}`;
  }

  useEffect(() => {
    const getAdInfo = async (id) => {
      const json = await api.getAd(id, true);
      setAdInfo(json);
      setLoading(false);
    }
    getAdInfo(id);
  }, []);

  return(
    <PageContainer>
      <PageArea>
        <div className="leftSide">
          <div className="box">
            <div className="adImage">
              {loading && <Fake height={300}/>}
              {adInfo.images &&
                <Slide>
                  {adInfo.images.map((img, k) => 
                    <div className="each-slide" key={k}>
                      <img src={img} alt="" />
                    </div>
                  )}
                </Slide>
              }
            </div>
            <div className="adInfor">
              <div className="adName">
                {loading && <Fake height={20}/>}
                {adInfo.title &&
                  <h2>{adInfo.title}</h2>
                }
                {adInfo.dateCreated && 
                <small>Criado em {formatDate(adInfo.dateCreated)}</small>
                }
              </div>
              <div className="adDescription">
                {loading && <Fake height={100}/>}
                {adInfo.description}
                <hr/>
                {adInfo.views && 
                  <small>Visualizações: {adInfo.views}</small>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="box box--padding">
            {loading && <Fake height={20}/>}
          </div>
          <div className="box box--padding">
            {loading && <Fake height={50}/>}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;
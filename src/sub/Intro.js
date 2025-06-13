import React from 'react';

function Intro(props) {
  return (
    <section className='sub'>
      <div>
        <h2>YTS.mx</h2>
        <h3>자세히 알아보기</h3>
        <p>YTS.mx는 YIFY라는 그룹에서 무료로 영화를 다운로드할 수 있도록 제공하는 웹사이트입니다. YTS는 영화를 1080p, 720p, 480p 등의 다양한 해상도로 제공하며, 다운로드 링크를 통해 무료로 영화를 다운로드할 수 있습니다. YTS는 또한 자막과 음성 선택 옵션을 제공하여 사용자가 원하는 영화를 즐길 수 있도록 지원합니다.</p>
        <br />
        <hr />
        <h4>YTS.mx 웹사이트의 주요 기능</h4>
        <ul>
          <li className='function'>
            무료 영화 다운로드 : 
            <ul>
              <li>- YTS.mx는 YIFY 그룹에서 배포하는 영화를 무료로 다운로드할 수 있도록 지원합니다.</li>
            </ul>
          </li>

          <li className='function'>
            다양한 해상도 : 
            <ul>
              <li>- 1080p, 720p, 480p 등 다양한 해상도로 영화를 제공하여 사용자의 기기에 맞는 해상도를 선택할 수 있습니다.</li>
            </ul>
          </li>

          <li className='function'>
          자막과 음성 선택 : 
            <ul>
              <li>- 사용자가 원하는 자막과 음성을 선택할 수 있도록 지원합니다.</li>
            </ul>
          </li>

          <li className='function'>
          영화 정보 제공 : 
            <ul>
              <li>- YTS.mx는 영화 제목, 줄거리, 출연진, 감독 등의 영화 정보를 제공합니다.</li>
            </ul>
          </li>

          <li className='function'>
          영화 검색 : 
            <ul>
              <li>- YTS.mx는 키워드 검색을 통해 원하는 영화를 쉽게 찾을 수 있도록 지원합니다. </li>
            </ul>
          </li>
        </ul>

        <br />
        <hr />
        <h4>YTS.mx 사용 시 주의사항</h4>
        <ul>
          <li>- YTS.mx는 YIFY 그룹에서 배포하는 영화를 무료로 다운로드할 수 있도록 지원하는 웹사이트로, 저작권 문제에 대한 책임을 지지 않습니다.</li>
          <li>- 다운로드 시 개인 정보 유출이나 악성 프로그램 감염의 위험이 있을 수 있습니다.</li>
          <li>- YTS.mx는 법적으로 문제가 될 수 있는 영화를 제공하지 않도록 노력하지만, 경우에 따라 문제가 발생할 수 있습니다. </li>
        </ul>
      </div>
    </section>
  );
}

export default Intro;
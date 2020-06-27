import React, { useState } from 'react';
import { css } from '@emotion/core';
import { spacing, colors } from '../style/style';
import withSplitting from '../components/Spliting/withSplitting';

// index.js에서 <React.StrictMode>로 감싸면 개발모드에서 2번 렌더링된다.
function Spliting() {
  const [splitMe, setSplitMe] = useState(null);
  const [visible, setVisible] = useState(false);
  const SplitMeHOC = withSplitting(() => import('../components/Spliting/SplitMe'));

  const handleFuncClick = () => {
    // import 를 함수로 사용하면, Promise 를 반환합니다.
    // import() 함수는 아직 표준은 아니지만 stage-3 단계에 있는 dynamic import 라는 문법입니다.
    // 현재는, webpack 에서 지원해주고 있는 함수이기에 여러분의 프로젝트에서 별도의 설정 없이 바로 사용 할 수 있습니다.
    // 이 함수는 모듈을 비동기적으로 CommonJS 형태로 불러오니, 따로 default 를 명시해주어야 합니다.
    // 위에서 사용한 코드에서는 "default 를 notify 를 부르겠다" 라고 설정을 해주었습니다.
    // 개발자도구 Network 탭에서 1.chunk.js 확인, 이를 청크 파일 이라고 부른다.
    // https://velog.io/@velopert/react-code-splitting
    import('../components/Spliting/notify').then(({ default: notify }) => {
      notify();
    });
  };
  const handleComponentClick = () => {
    import('../components/Spliting/SplitMe').then(({ default: SplitMe }) => {
      setSplitMe(SplitMe);
    });
  };

  return (
    <div>
      <button onClick={handleFuncClick}>
        Click Me(Func)
      </button>
      <button onClick={handleComponentClick}>Click Me(Component)</button>
      <button onClick={() => setVisible(true)}>Click Me(HOC)</button>
      <button onClick={() => setVisible(false)}>Make False(HOC)</button>
      {splitMe}
      {visible && <SplitMeHOC />}
    </div>
  );
}
export default Spliting;

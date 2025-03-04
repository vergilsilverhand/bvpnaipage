// custom-brand.js
document.addEventListener('DOMContentLoaded', function() {
  // 替换OpenWebUI名称
  const yourBrandName = "BestVPN AI";
  document.title = document.title.replace(/OpenWebUI/g, yourBrandName);
  
  function replaceTextNodes(node) {
    if (node.nodeType === 3) {
      if(node.nodeValue.includes('OpenWebUI')) {
        node.nodeValue = node.nodeValue.replace(/OpenWebUI/g, yourBrandName);
      }
    } else {
      Array.from(node.childNodes).forEach(replaceTextNodes);
    }
  }
  replaceTextNodes(document.body);
  
  // 添加第三方登录按钮
  if(window.location.pathname.includes('/login')) {
    const loginForm = document.querySelector('form');
    if(loginForm) {
      const thirdPartyBtn = document.createElement('a');
      thirdPartyBtn.href = 'https://您的第三方平台/authorize?redirect=' + encodeURIComponent(window.location.origin);
      thirdPartyBtn.style.display = 'block';
      thirdPartyBtn.style.width = '100%';
      thirdPartyBtn.style.padding = '10px';
      thirdPartyBtn.style.marginTop = '16px';
      thirdPartyBtn.style.backgroundColor = '#4f46e5';
      thirdPartyBtn.style.color = 'white';
      thirdPartyBtn.style.textAlign = 'center';
      thirdPartyBtn.style.borderRadius = '4px';
      thirdPartyBtn.style.textDecoration = 'none';
      thirdPartyBtn.textContent = '通过第三方平台登录';
      
      loginForm.parentNode.insertBefore(thirdPartyBtn, loginForm.nextSibling);
    }
  }
}); 

      const LinksSocialMedia = {
        github: 'felpsalvs',
        instagram: 'felpsalvs',
        twitter: 'felpzzzzzz'
      }

      function changeSocialMediaLinks() {
      for (let li of socialLinks.children) {
      const social = li.getAttribute('class')
       li.children [0].href = `https://${social}.com/${LinksSocialMedia[social]}`
      
      }
      }

      changeSocialMediaLinks()

      function getGitHubprofileInfos(){
        const url = `https://api.github.com/users/${LinksSocialMedia.github}`
        fetch(url)
        .then(response => response.json())
        .then(data => {
          userName.textContent = data.name
          userBio.textContent = data.bio
          UserImage.src = data.avatar.url
          userLogin.textContent = data.login
        })
      
      }
        getGitHubprofileInfos()

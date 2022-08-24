# Succubus C2

![Succubus IMG](https://repository-images.githubusercontent.com/399815613/382efa0e-9147-4225-a304-29fccb61b25a)

If you think this is a backdoor please sumbit the proof as an issue or fork this repository otherwise fuck off, sincerely bleach.

6525 Lines of code and counting

Non profit c2 for all you wanting something to 
get off of the ground and start your projects.
Don't annoy or complain to others that they are
using a free c2. Why should anyone pay for 
something that's free. you just look like an 
idiot. :)

## Setup

Setup Video - https://www.youtube.com/watch?v=TFNugqO2y4k

- first step - mysql

  *need to setup mysql?* Go Here: https://dev.mysql.com/doc/mysql-installation-excerpt/5.7/en/
  
  > You may need to allow localhost to connect if you do not allow remote connections here is a command that should allow you to whitelist yourself 
  > 
  > `$ mysql -u USERNAME -pSECRET_PASSWORD mysql -e "grant ALL on *.* to USERNAME@'localhost' IDENTIFIED by 'SECRET_PASSWORD';"`

  > If you have too many file descriptors open change to however much you need
  > 
  > `$ ulimit -n 999999`

  `$ mysql -u USERNAME -p SECRET_PASSWORD succubus < doodump.sql`
  *that's all there is too it folks*

- second step - customize!
  go ahead you're already good to go!

*original made in a week flat*

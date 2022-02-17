import random
from tkinter import *
from tkinter.ttk import *
from PIL import Image, ImageTk

class Card:
    def __init__(self,number,type):
        self.number = number
        self.type = type

    def __str__(self):
        if self.number > 1 and self.number  < 11:
            return '{} of {}'.format(self.number,self.type)
        if self.number == 1:
            return '{} of {}'.format('A',self.type)
        if self.number == 11:
            return '{} of {}'.format('J',self.type)
        if self.number == 12:
            return '{} of {}'.format('Q',self.type)
        if self.number == 13:
            return '{} of {}'.format('K',self.type)

    def get_image(self):
        if self.number > 1 and self.number  < 11:
            return '{}{}.png'.format(self.number,self.type)
        if self.number == 1:
            return '{}{}.png'.format('A',self.type)
        if self.number == 11:
            return '{}{}.png'.format('J',self.type)
        if self.number == 12:
            return '{}{}.png'.format('Q',self.type)
        if self.number == 13:
            return '{}{}.png'.format('K',self.type)


    def __eq__(self, other):
        return self.type == other.type and self.number == other.number

class Pack:
    def __init__(self):
        self.pack = []
        for i in range(1,14):
            self.pack.append(Card(i,'H'))
        for i in range(1,14):
            self.pack.append(Card(i,'S'))
        for i in range(1,14):
            self.pack.append(Card(i,'C'))
        for i in range(1,14):
            self.pack.append(Card(i,'D'))

    def get_card(self):
        return random.choice(self.pack)


p = Pack()
card = p.get_card().get_image()
imp = Image.open(card)
image = imp.resize((300,100))





# ****** GUI *******

window = Tk()
window.title('Cards War')
window.geometry('500x400')

photo = PhotoImage(card)

Label(window,image=photo).pack()

window.mainloop()



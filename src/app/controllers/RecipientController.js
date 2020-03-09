import * as Yup from 'yup';

import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      street: Yup.string().required(),
      number: Yup.number()
        .integer()
        .positive()
        .required(),
      complement: Yup.string(),
      state: Yup.string().required(),
      city: Yup.string().required(),
      cep: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Failed on data validation' });
    }

    const recipient = await Recipient.create(req.body);

    return res.status(201).json({
      id: recipient.id,
      name: recipient.name,
      street: recipient.street,
      number: recipient.number,
      complement: recipient.complement,
      state: recipient.state,
      city: recipient.city,
      cep: recipient.cep,
    });
  }

  async index(req, res) {
    const recipients = await Recipient.findAll();

    if (!Array.isArray(recipients)) {
      return res.status(404).json({ error: 'Any recipient was found' });
    }

    return res.status(200).json(
      recipients.map(recipient => {
        return {
          recipient: {
            id: recipient.id,
            name: recipient.name,
            street: recipient.street,
            number: recipient.number,
            complement: recipient.complement,
            state: recipient.state,
            city: recipient.city,
            cep: recipient.cep,
          },
        };
      })
    );
  }

  async show(req, res) {
    const recipient = await Recipient.findOne({ where: { id: req.params.id } });

    if (!recipient) {
      return res.status(404).json({ error: 'Recipient was not found' });
    }

    return res.status(200).json({
      recipient: {
        id: recipient.id,
        name: recipient.name,
        street: recipient.street,
        number: recipient.number,
        complement: recipient.complement,
        state: recipient.state,
        city: recipient.city,
        cep: recipient.cep,
      },
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      street: Yup.string(),
      number: Yup.number().positive(),
      complement: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      cep: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Failed on data validation' });
    }

    const id = await Recipient.findOne({ where: { id: req.params.id } });

    if (!id) {
      return res.status(404).json({ error: 'Recipient was not found' });
    }

    const recipient = await Recipient.update(req.body, {
      where: { id: req.params.id },
    });

    if (!recipient) {
      return res.status(500).json({ error: 'Problems on update process' });
    }

    return res.status(200).json({ message: 'Successfully updated' });
  }

  async delete(req, res) {
    const id = await Recipient.findOne({ where: { id: req.params.id } });

    if (!id) {
      return res.status(404).json({ error: 'Recipient was not found' });
    }

    const recipient = await Recipient.destroy({ where: { id: req.params.id } });

    if (!recipient) {
      return res.status(500).json({ error: 'Problems on delete process' });
    }

    return res.status(200).json({ message: 'Successfully deleted' });
  }
}

export default new RecipientController();
